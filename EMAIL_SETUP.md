# Email Setup Guide for Portfolio Contact Form

This guide will help you set up email functionality for your portfolio contact form using EmailJS.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Confirm your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., service_abc123)

### For Gmail:
- You'll need to enable 2-factor authentication
- Generate an app-specific password
- Use this app password instead of your regular Gmail password

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Portfolio Contact from {{from_name}}

Hello Ashutosh,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., template_xyz789)

## Step 4: Get Your Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., user_abc123xyz)

## Step 5: Update Configuration

Update the file `src/config/emailConfig.ts` with your actual credentials:

```typescript
export const emailConfig = {
  serviceId: 'service_abc123', // Your Service ID
  templateId: 'template_xyz789', // Your Template ID
  publicKey: 'user_abc123xyz', // Your Public Key
};
```

## Step 6: Test the Contact Form

1. Run your portfolio: `npm start`
2. Navigate to the contact form
3. Fill out and submit a test message
4. Check your email for the received message

## Alternative Solution: Formspree

If you prefer a simpler solution, you can use Formspree:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create an account and get a form endpoint
3. Update your contact form action to point to the Formspree endpoint

## Troubleshooting

- **401 Unauthorized**: Check your public key and service ID
- **403 Forbidden**: Verify your template ID
- **Network Error**: Check your internet connection
- **Emails not arriving**: Check spam folder, verify email template

## Security Note

The EmailJS public key is safe to expose in frontend code. However, consider setting up usage limits in your EmailJS dashboard to prevent abuse.

## Rate Limits

EmailJS free tier includes:
- 200 emails per month
- Rate limiting to prevent spam

For production use, consider upgrading to a paid plan.
