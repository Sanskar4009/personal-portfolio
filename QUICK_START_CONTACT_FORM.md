# 🚀 Quick Setup - Contact Form

## ⚡ 3-Minute Setup

### Step 1: Get EmailJS Credentials (2 minutes)

1. **Sign up:** https://www.emailjs.com/
2. **Add Email Service** → Copy **Service ID** service_mz826qh
3. **Create Template** → Copy **Template ID**template_3crvruh
4. **Get API Key** from Account → Copy **Public Key**y5RkHyFljxd5T8ibG

### Step 2: Update Code (1 minute)

#### 🔑 File #1: `index.html` (Line ~740)

Find and replace:
```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
```

With your actual Public Key:
```javascript
emailjs.init('user_abc123xyz'); // ← Your Public Key
```

---

#### 🔑 File #2: `script.js` (Line ~585)

Find and replace:
```javascript
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
```

With your actual IDs:
```javascript
const serviceID = 'service_abc123'; // ← Your Service ID
const templateID = 'template_xyz789'; // ← Your Template ID
```

---

### ✅ That's It!

Your contact form is now ready to send emails! 🎉

---

## 📋 Email Template Variables

When creating your EmailJS template, use these variables:

```html
Name: {{name}}
Email: {{email}}
Message: {{message}}
To Name: {{to_name}}
```

---

## 🧪 Test It!

1. Open your portfolio
2. Fill out the contact form
3. Submit
4. Check your email! ✉️

---

## 🎯 What You Get

✅ Working email form  
✅ Form validation  
✅ Loading spinner  
✅ Success/error messages  
✅ Modern UI  
✅ Responsive design  

---

**Need detailed instructions? See `EMAILJS_SETUP_GUIDE.md`**
