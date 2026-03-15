# Google Form Entry ID Setup Instructions

## Quick Setup (2 minutes)

### Step 1: Extract Entry IDs from Google Form

1. **Open your Google Form:**
   - https://docs.google.com/forms/d/e/1FAIpQLSdzHfTUQX8UYIW5-NhmTA7UiSJiJep47b7tO7wdCDBfztck9Q/viewform

2. **Open Browser Console:**
   - Press `F12` (or Right-click → Inspect)
   - Go to the **Console** tab

3. **Run Extraction Function:**
   - Copy and paste this code into the console:
   
```javascript
(function() {
    console.log('%c🔍 Extracting Entry IDs...', 'color: #7b61ff; font-size: 16px; font-weight: bold;');
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    const results = {};
    
    inputs.forEach((input, i) => {
        if (input.name && input.name.startsWith('entry.')) {
            const label = input.closest('[role="listitem"]')?.querySelector('[role="heading"]')?.textContent?.trim() || `Field ${i+1}`;
            const lowerLabel = label.toLowerCase();
            
            let key = '';
            if (lowerLabel.includes('name') || (i === 0 && input.type !== 'email')) {
                key = 'name';
            } else if (lowerLabel.includes('email') || input.type === 'email') {
                key = 'email';
            } else if (lowerLabel.includes('message') || input.tagName === 'TEXTAREA') {
                key = 'message';
            } else {
                key = `field${i+1}`;
            }
            
            results[key] = input.name;
            console.log(`%c✓ ${label}: %c${input.name}`, 'color: #4ade80;', 'color: #5f9eff; font-family: monospace;');
        }
    });
    
    console.log('%c\n✅ Entry IDs extracted!', 'color: #4ade80; font-size: 14px; font-weight: bold;');
    console.log('%c\n📋 Copy this:', 'color: #7b61ff; font-size: 14px; font-weight: bold;');
    console.log(JSON.stringify(results, null, 4));
    
    return results;
})();
```

4. **Copy the output** - You'll see something like:
```json
{
    "name": "entry.123456789",
    "email": "entry.987654321",
    "message": "entry.456789123"
}
```

### Step 2: Update script.js

1. Open `script.js` in your editor
2. Find the `ENTRY_IDS` object (around line 333)
3. Replace the placeholder values with the actual entry IDs from Step 1

**Before:**
```javascript
const ENTRY_IDS = {
    name: 'entry.XXXXXXX',
    email: 'entry.XXXXXXX',
    message: 'entry.XXXXXXX'
};
```

**After:**
```javascript
const ENTRY_IDS = {
    name: 'entry.123456789',    // Your actual Name field ID
    email: 'entry.987654321',   // Your actual Email field ID
    message: 'entry.456789123'  // Your actual Message field ID
};
```

### Step 3: Test the Form

1. Open your portfolio website
2. Go to the Contact section
3. Fill out and submit the form
4. Check your Google Form responses to verify the submission

## Alternative: Use Helper File

You can also use the `get-entry-ids.html` file:
1. Open `get-entry-ids.html` in your browser
2. Follow the instructions on the page
3. Copy the extracted entry IDs
4. Update `script.js` as described above

## Verification

After updating the entry IDs, you can verify the configuration:

1. Open your website
2. Press `F12` → Console tab
3. Run: `validateEntryIds()`
4. You should see: "✅ Entry IDs are configured" with your IDs

## Troubleshooting

- **Error: "Form configuration incomplete"**
  - Make sure you've updated all three entry IDs in `script.js`
  - Verify the entry IDs don't contain "XXXXXXX"

- **Form submits but no data in Google Sheets**
  - Check that the entry IDs are correct
  - Verify the Google Form is set to collect responses
  - Check the Google Form's response settings

- **Can't find entry IDs**
  - Make sure you're on the Google Form page (not edit mode)
  - Try the manual method: Right-click on each field → Inspect → Look for `name="entry.XXXXXXX"`

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify the entry IDs are correct
3. Test the form submission
4. Check Google Form responses to see if data is being received

