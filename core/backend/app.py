from flask import Flask, request
from flask_cors import CORS
from flask_restx import Api, Resource, fields
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta
from dateutil import tz
import uuid
import threading


# ---------------- GOOGLE AUTH ----------------
from google.auth import default
# from google.auth.transport.requests import Request
from googleapiclient.discovery import build

# ---------------- APP SETUP ----------------
app = Flask(__name__)
CORS(app)
executor = ThreadPoolExecutor(max_workers=5)

# ---------------- API / SWAGGER ----------------
api = Api(
    app,
    version="1.0",
    title="Nyukt AI Contact & Support API",
    description="Handles contact form submissions and support call scheduling",
    doc="/docs",
)

# ---------------- EMAIL CONFIG ----------------
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_USERNAME = "pritirekha@nyukt.ai"
EMAIL_PASSWORD = "ovcw oolh dexl bipt"  
RECIPIENT_EMAIL = "business@nyukt.ai"

# ---------------- GOOGLE CALENDAR CONFIG ----------------
CALENDAR_ID = "tech@nyukt.ai"

SCOPES = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events"
]
IST = tz.gettz("Asia/Kolkata")


# ---------------- UTILS ----------------
def parse_to_ist(dt_str):
    """Ensures strings from frontend are treated as IST with timezone info."""
    # Handle ISO strings that might have 'Z' or no offset
    dt = datetime.fromisoformat(dt_str.replace("Z", "+00:00"))
    if dt.tzinfo is None or dt.utcoffset() is None:
        return dt.replace(tzinfo=IST)
    return dt.astimezone(IST)

# ---------------- API MODELS ----------------
contact_model = api.model('Contact', {
    'First_Name': fields.String(required=True),
    'Last_Name': fields.String(required=True),
    'Email': fields.String(required=True),
    'Phone': fields.String(),
    'Company': fields.String(required=True),
    'Description': fields.String()
})

book_call_model = api.model("BookCall", {
    "name": fields.String(required=True),
    "email": fields.String(required=True),
    "start": fields.String(required=True), # Expected: 2026-01-15T10:00:00
    "end": fields.String(required=True)
})


# ---------------- EMAIL FUNCTIONS ----------------
def send_email(data, to_email=None, subject=None):
    """Send HTML email."""
    try:
        msg = MIMEMultipart("alternative")
        msg["From"] = EMAIL_USERNAME
        msg["To"] = to_email or RECIPIENT_EMAIL
        msg["Subject"] = subject or f"New Contact Form – {data['First_Name']} {data['Last_Name']}"

        html_body = f"""
         <html>
  <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 20px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0; padding: 30px;">
            <!-- Header -->
            <tr>
              <td style="text-align: center; padding-bottom: 20px;">
                <h2 style="color: #4B0082; margin: 0; font-size: 24px;">New Contact Form Submission</h2>
              </td>
            </tr>

            <!-- User Info -->
            <tr>
              <td>
                <table width="100%" cellpadding="5" cellspacing="0">
                  <tr>
                    <td style="font-weight: bold; color: #333;">Name:</td>
                    <td style="color: #555;">{data['First_Name']} {data['Last_Name']}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; color: #333;">Email:</td>
                    <td style="color: #555;">{data['Email']}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; color: #333;">Phone:</td>
                    <td style="color: #555;">{data.get('Phone', 'N/A')}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; color: #333;">Company:</td>
                    <td style="color: #555;">{data['Company']}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding-top: 20px;">
                <p style="font-weight: bold; color: #333; margin-bottom: 5px;">Message:</p>
                <p style="color: #555; background-color: #f4f4f4; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
                  {data.get('Description', 'No message')}
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding-top: 30px; text-align: center; font-size: 12px; color: #999;">
                This email is coming from the contact form on nyukt.ai website.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
        """
        msg.attach(MIMEText(html_body, "html"))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=10) as server:
            server.starttls()
            server.login(EMAIL_USERNAME, EMAIL_PASSWORD)
            server.send_message(msg)
            print(f"Email sent successfully to {msg['To']}!")
    except Exception as e:
        print(f"Email sending failed: {str(e)}")

def send_email_async(data, to_email=None, subject=None):
    thread = threading.current_thread()
    print(f"Starting email send in thread: {thread.name}")
    try:
        send_email(data, to_email=to_email, subject=subject)
    except Exception as e:
        print(f"Async email failed: {str(e)}")

# ---------------- GOOGLE CALENDAR FUNCTIONS ----------------
# ---------------- AUTH FIX ----------------
def get_calendar_service():
    """
    Recommended: Use a service-account.json file for consistent auth.
    If you use google.auth.default(), ensure GOOGLE_APPLICATION_CREDENTIALS 
    is set in your environment.
    """
    try:
        # If you have a key file, use this line:
        # creds = service_account.Credentials.from_service_account_file('key.json', scopes=SCOPES)
        
        # Fallback to your current method for now
        from google.auth import default
        credentials, project = default(scopes=SCOPES)
        return build("calendar", "v3", credentials=credentials, cache_discovery=False)
    except Exception as e:
        print(f"Auth Error: {e}")
        raise
def get_busy_slots(date):
    try:
        service = get_calendar_service()
        start_of_day = datetime(date.year, date.month, date.day, 0, 0, tzinfo=IST)
        end_of_day = datetime(date.year, date.month, date.day, 23, 59, tzinfo=IST)
        body = {"timeMin": start_of_day.isoformat(),
                "timeMax": end_of_day.isoformat(),
                "items": [{"id": CALENDAR_ID}]}
        response = service.freebusy().query(body=body).execute()
        return response.get("calendars", {}).get(CALENDAR_ID, {}).get("busy", [])
    except Exception as e:
        print(f"Error in get_busy_slots: {str(e)}")
        raise

def create_calendar_event(start, end, user_email, user_name):
    try:
        service = get_calendar_service()
        event = {
            "summary": "Nyukt Support Call",
            "description": f"Support call with {user_name}",
            "start": {"dateTime": start, "timeZone": "Asia/Kolkata"},
            "end": {"dateTime": end, "timeZone": "Asia/Kolkata"},
            "attendees": [{"email": user_email}],
            "conferenceData": {"createRequest": {"requestId": str(uuid.uuid4())}}
        }
        return service.events().insert(
            calendarId=CALENDAR_ID,
            body=event,
            conferenceDataVersion=1,
            sendUpdates="all"
        ).execute()
    except Exception as e:
        print(f"Error creating calendar event: {str(e)}")
        raise

# ---------------- API ENDPOINTS ----------------
@api.route('/api/submit-form')
class ContactForm(Resource):
    @api.expect(contact_model, validate=True)
    def post(self):
        data = api.payload
        executor.submit(send_email_async, data)
        return {"success": True, "message": "Thank you! Our team will contact you shortly."}, 200

@api.route("/api/availability")
class Availability(Resource):
    def get(self):
        try:
            date_str = request.args.get("date")
            if not date_str:
                return {"error": "date is required (YYYY-MM-DD)"}, 400
            
            # 1. Properly localize the date to IST
            target_date = datetime.strptime(date_str, "%Y-%m-%d")
            work_start = datetime(target_date.year, target_date.month, target_date.day, 10, 0, tzinfo=IST)
            work_end = datetime(target_date.year, target_date.month, target_date.day, 18, 0, tzinfo=IST)
            
            busy_slots = get_busy_slots(target_date)
            available_slots = []
            current = work_start
            slot_duration = timedelta(minutes=30)

            while current + slot_duration <= work_end:
                slot_end = current + slot_duration
                overlap = False
                
                for busy in busy_slots:
                    # Convert Google UTC to IST for fair comparison
                    b_start = datetime.fromisoformat(busy["start"].replace("Z", "+00:00")).astimezone(IST)
                    b_end = datetime.fromisoformat(busy["end"].replace("Z", "+00:00")).astimezone(IST)
                    
                    if current < b_end and slot_end > b_start:
                        overlap = True
                        break
                
                if not overlap:
                    available_slots.append({
                        "start": current.isoformat(),
                        "end": slot_end.isoformat()
                    })
                current = slot_end
                
            return {"success": True, "slots": available_slots}, 200
        except Exception as e:
            return {"error": str(e)}, 500

@api.route("/api/book-call")
class BookCall(Resource):
    @api.expect(book_call_model, validate=True)
    def post(self):
        try:
            data = api.payload
            # Fix: Ensure comparison uses IST-aware objects
            start_dt = parse_to_ist(data["start"])
            end_dt = parse_to_ist(data["end"])

            # Check availability
            busy_slots = get_busy_slots(start_dt.date())
            for busy in busy_slots:
                b_start = datetime.fromisoformat(busy["start"].replace("Z", "+00:00")).astimezone(IST)
                b_end = datetime.fromisoformat(busy["end"].replace("Z", "+00:00")).astimezone(IST)
                if start_dt < b_end and end_dt > b_start:
                    return {"success": False, "message": "This slot was just taken."}, 409

            # Create Event
            create_calendar_event(data["start"], data["end"], data["email"], data["name"])
            
            # Send Email (Simplified for readability)
            executor.submit(send_email_async, {
                "First_Name": data["name"], "Last_Name": "", "Email": data["email"], "Company": "Booking", "Description": f"Call booked for {data['start']}"
            }, to_email=data["email"], subject="Booking Confirmed")

            return {"success": True, "message": "Call scheduled!"}, 200
        except Exception as e:
            return {"success": False, "message": str(e)}, 500
# ---------------- START APP ----------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
