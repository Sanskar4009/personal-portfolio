# 📧 Email Template Examples for EmailJS

Copy and paste these templates into your EmailJS account!

---

## 🎨 Template 1: Professional (Recommended)

**Subject:** `New Message from {{name}}`

**Body:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #7b61ff 0%, #5f9eff 100%);
      color: white;
      padding: 30px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 0 0 10px 10px;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: bold;
      color: #7b61ff;
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
    }
    .value {
      background: white;
      padding: 15px;
      border-radius: 5px;
      border-left: 3px solid #7b61ff;
    }
    .message-box {
      background: white;
      padding: 20px;
      border-radius: 5px;
      border: 1px solid #e0e0e0;
      margin-top: 10px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      font-size: 12px;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>📨 New Contact Form Submission</h1>
  </div>
  
  <div class="content">
    <div class="field">
      <span class="label">FROM:</span>
      <div class="value">{{name}}</div>
    </div>
    
    <div class="field">
      <span class="label">EMAIL:</span>
      <div class="value">{{email}}</div>
    </div>
    
    <div class="field">
      <span class="label">MESSAGE:</span>
      <div class="message-box">
        {{message}}
      </div>
    </div>
  </div>
  
  <div class="footer">
    <p>Sent from Sanskar's Portfolio Website</p>
    <p>&copy; 2025 All Rights Reserved</p>
  </div>
</body>
</html>
```

---

## 🎨 Template 2: Simple & Clean

**Subject:** `Contact Form: Message from {{name}}`

**Body:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #7b61ff; border-bottom: 2px solid #7b61ff; padding-bottom: 10px;">
    New Contact Form Submission
  </h2>
  
  <div style="background: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p style="margin: 10px 0;">
      <strong style="color: #7b61ff;">Name:</strong><br>
      {{name}}
    </p>
    
    <p style="margin: 10px 0;">
      <strong style="color: #7b61ff;">Email:</strong><br>
      {{email}}
    </p>
    
    <p style="margin: 10px 0;">
      <strong style="color: #7b61ff;">Message:</strong><br>
      <span style="background: white; padding: 10px; border-left: 3px solid #7b61ff; display: block; margin-top: 5px;">
        {{message}}
      </span>
    </p>
  </div>
  
  <p style="font-size: 12px; color: #888; text-align: center; margin-top: 20px;">
    This message was sent from Sanskar's Portfolio Website
  </p>
</div>
```

---

## 🎨 Template 3: Modern Card Style

**Subject:** `📬 You've got mail from {{name}}!`

**Body:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }
    .card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      max-width: 600px;
      margin: 0 auto;
    }
    .card-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 25px;
      text-align: center;
    }
    .card-header h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 600;
    }
    .card-body {
      padding: 30px;
    }
    .info-row {
      display: flex;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
    .info-label {
      font-weight: 600;
      color: #667eea;
      min-width: 80px;
    }
    .info-value {
      color: #333;
      flex: 1;
    }
    .message-section {
      margin-top: 25px;
    }
    .message-label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 10px;
    }
    .message-content {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #667eea;
      white-space: pre-wrap;
    }
    .card-footer {
      background: #f8f9fa;
      padding: 15px 30px;
      text-align: center;
      font-size: 12px;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <h1>✉️ New Contact Form Submission</h1>
    </div>
    
    <div class="card-body">
      <div class="info-row">
        <span class="info-label">Name:</span>
        <span class="info-value">{{name}}</span>
      </div>
      
      <div class="info-row">
        <span class="info-label">Email:</span>
        <span class="info-value">{{email}}</span>
      </div>
      
      <div class="message-section">
        <div class="message-label">Message:</div>
        <div class="message-content">{{message}}</div>
      </div>
    </div>
    
    <div class="card-footer">
      Sent from Sanskar's Portfolio Website
    </div>
  </div>
</body>
</html>
```

---

## 🎨 Template 4: Minimalist Text-Only

**Subject:** `New message from {{name}}`

**Body:**
```
NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{name}}
Email: {{email}}

Message:
──────────────────────────
{{message}}
──────────────────────────

Sent from Sanskar's Portfolio Website
```

---

## ⚙️ Auto-Reply Template (Optional)

Set this up in EmailJS under "Auto-Reply" tab

**Subject:** `Thanks for contacting me!`

**Body:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .thank-you {
      background: linear-gradient(135deg, #7b61ff 0%, #5f9eff 100%);
      color: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      margin-bottom: 20px;
    }
    .thank-you h1 {
      margin: 0;
      font-size: 28px;
    }
    .content {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 10px;
    }
    .signature {
      margin-top: 20px;
      font-style: italic;
      color: #7b61ff;
    }
  </style>
</head>
<body>
  <div class="thank-you">
    <h1>Thank You! 🎉</h1>
  </div>
  
  <div class="content">
    <p>Hi {{name}},</p>
    
    <p>Thanks so much for reaching out! I've received your message and I'll get back to you as soon as possible (usually within 24-48 hours).</p>
    
    <p>In the meantime, feel free to check out my portfolio and connect with me on social media!</p>
    
    <p>Best regards,<br>
    <strong>Sanskar Sainik</strong></p>
    
    <div class="signature">
      Cloud & AWS Learner • C++ Programmer • Web/UI Developer
    </div>
  </div>
</body>
</html>
```

---

## 📋 Setup Instructions

### Step 1: Choose a Template
Pick the template style you like best (Template 1 is recommended!)

### Step 2: Create in EmailJS
1. Go to EmailJS Dashboard
2. Click **"Email Templates"**
3. Click **"Create New Template"**
4. Choose **"Start from scratch"**
5. Paste the HTML into the editor

### Step 3: Configure Variables
Make sure these variables are in your template:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (optional)

### Step 4: Save & Test
1. Click **"Save"**
2. Click **"Send Test"** to verify it works
3. Check your email inbox!

---

## 💡 Pro Tips

1. **Use HTML templates** for better visual appeal
2. **Keep it mobile-friendly** (responsive design)
3. **Include clear call-to-action** if needed
4. **Test on multiple email clients** (Gmail, Outlook, etc.)
5. **Set up auto-reply** for better user experience

---

## 🎯 Recommended Setup

**Template:** Template 1 (Professional)
**Auto-Reply:** Enabled
**Subject Line:** `New Message from {{name}}`

This combination provides the best professional appearance and user experience!

---

**Happy emailing! 📧✨**
