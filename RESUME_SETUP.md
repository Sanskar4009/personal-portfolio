# Resume Setup Instructions

## Current Setup

Your portfolio now includes a **Resume button** in the hero section that opens a modal with resume preview and download functionality.

## Files Added

1. **resume.html** - A placeholder HTML resume (currently being shown when no PDF is available)
2. **Modal functionality** - Complete with preview iframe and download button

## How to Add Your Actual Resume PDF

### Option 1: Replace with PDF (Recommended)

1. Create or export your resume as a PDF file
2. Name it exactly: `resume.pdf`
3. Place it in the root folder of your project: `e:\btech\sem 6\pes319\portfolio build ca1\`
4. The system will automatically detect and show the PDF instead of the HTML placeholder

### Option 2: Keep Using HTML Placeholder

If you don't have a PDF yet, the system will continue showing `resume.html` which contains:
- Your contact information
- Education details
- Technical skills
- Projects
- Certifications

## Features Implemented

✅ **Resume Button** - Modern rounded button with gradient and icon below the subtitle
✅ **Modal Popup** - Dark transparent overlay with centered modal
✅ **PDF/HTML Preview** - Iframe shows resume content
✅ **Download Button** - Green gradient button at the bottom of modal
✅ **Close Functionality** - X button, click outside, or ESC key to close
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Smooth Animations** - Fade-in effects and hover transitions

## File Structure

```
portfolio build ca1/
├── index.html          (Updated with Resume button and modal HTML)
├── style.css           (Updated with modal and button styles)
├── script.js           (Updated with modal functionality)
├── resume.html         (Placeholder resume - auto-generated)
└── resume.pdf          (ADD YOUR ACTUAL PDF HERE - currently missing)
```

## Testing

1. Open `index.html` in your browser
2. Click the "Resume" button in the hero section
3. The modal should open showing the resume preview
4. Click "Download Resume" to download the PDF
5. Click the X button or outside the modal to close

## Notes

- If `resume.pdf` is not found, the system automatically shows `resume.html`
- The download button will alert users if no PDF file exists
- All animations and transitions match your existing portfolio theme
- Mobile responsive design ensures great UX on all devices
