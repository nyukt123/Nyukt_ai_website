# Backend for Contact Form

This is a Flask-based backend for handling contact form submissions and sending emails.

## Setup Instructions

1. **Install Python**
   - Make sure you have Python 3.8 or higher installed

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure Email**
   - Open `.env` file
   - Replace `your_email@gmail.com` with your Gmail address
   - Replace `your_app_specific_password` with an App Password from your Google Account
     - Go to your Google Account > Security > 2-Step Verification > App Passwords
     - Generate a new app password for this application

4. **Run the Backend**
   ```bash
   python app.py
   ```
   The server will start on `http://localhost:5000`

## API Documentation

Once the server is running, you can access the Swagger UI at:
`http://localhost:5000/`

## Endpoints

- `POST /api/submit-form` - Submit contact form data

## Environment Variables

- `EMAIL_USERNAME`: Your Gmail address
- `EMAIL_PASSWORD`: App-specific password for Gmail
