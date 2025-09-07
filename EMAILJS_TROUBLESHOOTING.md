# EmailJS Troubleshooting Guide

## Common Issues a## Common Error Codes

- **400 Bad Request**: Template variables don't match
- **401 Unauthorized**: Wrong public key or service ID
- **403 Forbidden**: Domain restrictions or rate limiting
- **404 Not Found**: Wrong service ID or template ID
- **412 Gmail_API: Request had insufficient authentication scopes**: Gmail service not properly authenticated

### Fix for Error 412 (Gmail Authentication Issue)

This error occurs when your Gmail service in EmailJS doesn't have proper permissions. Here's how to fix it:

**Option 1: Reconnect Your Gmail Service**
1. Go to your EmailJS dashboard
2. Navigate to "Email Services"
3. Find your Gmail service and click "Reconnect Service"
4. Re-authorize with Gmail, making sure to grant all requested permissions
5. Test the service from EmailJS dashboard

**Option 2: Create a New Gmail Service**
1. Delete the existing Gmail service in EmailJS
2. Create a new Gmail service
3. During setup, ensure you:
   - Use the correct Gmail account
   - Grant all requested permissions
   - Complete the OAuth flow fully

**Option 3: Use App Password (Recommended)**
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings → Security → 2-Step Verification
3. At the bottom, click "App passwords"
4. Generate a new app password for "Mail"
5. In EmailJS, create a new Gmail service using:
   - Your Gmail address
   - The app password (not your regular password)

**Option 4: Switch to Different Email Provider**
If Gmail continues to have issues, try:
- Outlook/Hotmail service in EmailJS
- Yahoo Mail service
- Or switch to Formspree as alternativeutions

### 1. Check EmailJS Template Variables

Your EmailJS template should use these exact variable names:
- `{{from_name}}` - for the sender's name
- `{{from_email}}` - for the sender's email
- `{{message}}` - for the message content

### 2. Verify EmailJS Service Status

1. Log into your EmailJS dashboard
2. Go to Email Services
3. Make sure your service is active and properly configured
4. Test your service by sending a test email from the dashboard

### 3. Check Public Key Settings

1. In EmailJS dashboard, go to Account → General
2. Make sure "Restrict to Domain" is either:
   - Empty (allows all domains)
   - Set to your domain (localhost:3003 for development)

### 4. Template Configuration

Your template should look like this:

**Subject:** New Portfolio Contact from {{from_name}}

**Body:**
```
Hello,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### 5. Check Browser Console

Open your browser's developer tools (F12) and check the Console tab for detailed error messages when submitting the form.

### 6. Common Error Codes

- **400 Bad Request**: Template variables don't match
- **401 Unauthorized**: Wrong public key or service ID
- **403 Forbidden**: Domain restrictions or rate limiting
- **404 Not Found**: Wrong service ID or template ID

### 7. Rate Limiting

EmailJS free tier has limits:
- 200 emails per month
- Rate limiting to prevent abuse

If you're hitting limits, you'll see a 403 error.

### 8. CORS Issues

If you see CORS errors, make sure your domain is allowed in EmailJS settings.

## Quick Test Steps

1. Open browser console (F12 → Console)
2. Try submitting the contact form
3. Look for log messages starting with "EmailJS Config:" and "Failed to send email:"
4. Share the error details for further troubleshooting

## Alternative: Use Formspree

If EmailJS continues to have issues, you can switch to Formspree:

1. Go to https://formspree.io/
2. Create a free account
3. Create a new form and get the endpoint URL
4. Replace the Contact component with ContactFormspree component
5. Update the FORMSPREE_ENDPOINT with your URL
