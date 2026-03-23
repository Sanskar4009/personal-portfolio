# 📧 EmailJS Contact Form Setup Guide

This guide will help you set up the contact form to send emails directly to your inbox using **EmailJS** (no backend required!).

---

## ✅ What You'll Get

- ✉️ Working email-based contact form
- 🎨 Modern, responsive UI with animations
- ✔️ Form validation (required fields, email format)
- ⏳ Loading spinner while sending
- ✅ Success/error messages
- 🚫 No backend needed - pure client-side solution

---

## 🔧 Step-by-Step Setup

### Step 1: Create EmailJS Account (2 minutes)

1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up Free"**
3. Create an account (use your Gmail or any email)
4. Verify your email address

### Step 2: Add Email Service (3 minutes)

1. After logging in, go to **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Select your email provider (e.g., Gmail)
4. Click **"Connect Your Account"**
5. Authorize EmailJS to access your email
6. Click **"Create Service"**
7. **Copy the Service ID** (e.g., `service_abc123`) - you'll need this!

### Step 3: Create Email Template (5 minutes)

1. Go to **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Choose a template or start from scratch
4. Configure the template:

   **Template Settings:**
   - **Subject:** `New Message from {{name}}`
   - **From Email:** `your-email@gmail.com` (auto-filled)
   
   **Email Content (Body):**
   ```html
   <h2>New Contact Form Submission</h2>
   
   <p><strong>Name:</strong> {{name}}</p>
   <p><strong>Email:</strong> {{email}}</p>
   <p><strong>Message:</strong></p>
   <p>{{message}}</p>
   
   <hr>
   <p style="font-size: 12px; color: #888;">Sent from Sanskar's Portfolio Website</p>
   ```

5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_xyz789`) - you'll need this!

### Step 4: Get Your Public API Key (1 minute)

1. Click on your **profile picture** (top right)
2. Go to **"Account"** or **"API Keys"**
3. Under **"Public Key"**, click **"Copy"**
4. **Copy your Public Key** (e.g., `user_abc123xyz`) - you'll need this!

### Step 5: Update Your Code (2 minutes)

Now update these values in your code:

#### File 1: `index.html` (Line ~740)

Find this section and replace `YOUR_EMAILJS_PUBLIC_KEY`:

```javascript
// Initialize EmailJS - REPLACE WITH YOUR ACTUAL EMAILJS PUBLIC KEY
(function() {
    emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // ← Replace this!
})();
```

**Example:**
```javascript
emailjs.init('user_abc123xyz');
```

#### File 2: `script.js` (Line ~585)

Find this section and replace the IDs:

```javascript
const serviceID = 'YOUR_SERVICE_ID'; // ← Replace this!
const templateID = 'YOUR_TEMPLATE_ID'; // ← Replace this!
```

**Example:**
```javascript
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';
```

---

## 🎉 That's It! You're Done!

Your contact form should now send emails directly to your inbox when someone submits it!

---

## 🧪 Test Your Form

1. Open your portfolio website
2. Scroll to the **Contact** section
3. Fill out the form:
   - **Name:** Your Name
   - **Email:** your.email@example.com
   - **Message:** This is a test message
4. Click **"Send Message"**
5. Check your email inbox for the test message!

---

## 🎨 Features Included

### ✅ Form Validation
- Required fields (Name, Email, Message)
- Email format validation
- Real-time error messages

### ✅ User Feedback
- Loading spinner while sending
- Success message after submission
- Error handling for failed submissions
- Auto-dismiss success message after 5 seconds

### ✅ Modern UI
- Clean input fields with labels
- Smooth animations
- Hover effects on buttons
- Responsive design for all devices
- Font Awesome icons for social media

### ✅ Social Icons Fixed
- LinkedIn icon with proper branding
- GitHub icon with proper branding
- Hover effects with brand colors
- Scale and rotation animations

---

## 🔒 Security Notes

- EmailJS is safe and secure
- Your API keys are exposed in client-side code (this is normal for EmailJS)
- EmailJS has built-in rate limiting
- Free tier: 200 emails/month
- Paid plans start at $15/month for 2000 emails

---

## 📊 EmailJS Pricing

| Plan | Emails/Month | Price |
|------|--------------|-------|
| **Free** | 200 | $0 |
| **Basic** | 2,000 | $15 |
| **Professional** | 15,000 | $39 |
| **Enterprise** | Custom | Contact Sales |

For a portfolio website, the **Free tier** (200 emails/month) is usually sufficient!

---

## 🛠️ Troubleshooting

### ❌ "Service not found" error
- Make sure you copied the correct **Service ID**
- Check that your email service is active in EmailJS dashboard

### ❌ "Template not found" error
- Verify the **Template ID** is correct
- Make sure the template is saved

### ❌ Form submits but no email received
- Check your email spam folder
- Verify your email service is properly connected
- Check EmailJS dashboard for delivery logs

### ❌ CORS errors
- EmailJS handles CORS automatically
- Make sure you're using the official EmailJS SDK

---

## 📱 Customization Options

### Change Email Recipients

To send emails to multiple recipients, update your EmailJS template:

1. Go to EmailJS Dashboard > Templates
2. Edit your template
3. In "To Email", add multiple emails separated by commas:
   ```
   sanskarsainik40@gmail.com, another@email.com
   ```

### Customize Email Design

Edit the HTML template in EmailJS to match your branding:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h2 style="color: #7b61ff;">New Contact Form Submission</h2>
  <div style="background: #f4f4f4; padding: 20px; border-radius: 10px;">
    <p><strong>From:</strong> {{name}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Message:</strong></p>
    <p style="background: white; padding: 15px; border-left: 3px solid #7b61ff;">
      {{message}}
    </p>
  </div>
</div>
```

### Add Auto-Reply

Set up an automatic reply to the sender:

1. In EmailJS, go to your template
2. Click **"Auto-Reply"** tab
3. Enable auto-reply
4. Set subject: `Thanks for contacting me!`
5. Set body:
   ```html
   Hi {{name}},
   
   Thanks for reaching out! I've received your message and will get back to you soon.
   
   Best regards,
   Sanskar Sainik
   ```

---

## 🎯 Next Steps

1. ✅ Complete the EmailJS setup
2. ✅ Test the contact form
3. ✅ Deploy your updated portfolio
4. ✅ Monitor email submissions

---

## 📞 Need Help?

- **EmailJS Docs:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support:** support@emailjs.com

---

**Good luck with your portfolio! 🚀**
