from flask import Flask
from flask_cors import CORS
from flask_restx import Api, Resource, fields
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from concurrent.futures import ThreadPoolExecutor
import threading

app = Flask(__name__)
CORS(app)

# Thread pool for background tasks
executor = ThreadPoolExecutor(max_workers=3)

# ---------------- API / Swagger CONFIG ----------------
api = Api(
    app,
    version='1.0',
    title='Nyukt AI Contact Form API',
    description='API for handling contact form submissions',
    doc='/docs',  # Swagger UI
)

# ---------------- EMAIL CONFIG ----------------
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
EMAIL_USERNAME = "pritirekha@nyukt.ai"
EMAIL_PASSWORD = "ovcw oolh dexl bipt"
RECIPIENT_EMAIL = "tech@nyukt.ai"

# ---------------- API MODEL ----------------
contact_model = api.model('Contact', {
    'First_Name': fields.String(required=True, description="First Name"),
    'Last_Name': fields.String(required=True, description="Last Name"),
    'Email': fields.String(required=True, description="Email Address"),
    'Phone': fields.String(description="Phone Number"),
    'Company': fields.String(required=True, description="Company Name"),
    'Description': fields.String(description="Message / Description")
})

# ---------------- EMAIL FUNCTION ----------------
def send_email(data):
    try:
        msg = MIMEMultipart("alternative")
        msg["From"] = EMAIL_USERNAME
        msg["To"] = RECIPIENT_EMAIL
        msg["Subject"] = f"New Contact Form – {data['First_Name']} {data['Last_Name']}"

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
            print("Email sent successfully!")
    except Exception as e:
        print(f"Email sending failed: {str(e)}")

def send_email_async(data):
    # This function runs in a separate thread
    thread = threading.current_thread()
    print(f"Starting email send in thread: {thread.name}")
    send_email(data)

# ---------------- API ROUTE ----------------
@api.route('/api/submit-form')
class ContactForm(Resource):
    @api.expect(contact_model, validate=True)
    @api.response(200, 'Success')
    @api.response(400, 'Validation Error')
    def post(self):
        # RESTX automatically parses and validates the JSON payload
        data = api.payload
        
        # Submit email sending to thread pool and return response immediately
        executor.submit(send_email_async, data)
        
        return {
            "success": True, 
            "message": "Thank you! Our team will contact you shortly."
        }, 200

# ---------------- APP START ----------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
