# Achievements Section - Image Guide

## ✅ New Achievements Section Added!

A new **Achievements** section has been added to your portfolio, positioned **before the Certifications section**.

## 📸 How to Add Your Achievement Images

The achievement cards are set up with placeholder images. To add your actual photos:

### Image Requirements:
- **Recommended size:** 400x250 pixels (or any 16:10 aspect ratio)
- **Format:** JPG or PNG
- **File names:**
  1. `hackathon-achievement.jpg` - Photo from Binary Blitz Hackathon
  2. `leetcode-achievement.jpg` - LeetCode/coding related image
  3. `streak-achievement.jpg` - Streak celebration or coding image

### Steps:
1. Prepare your 3 achievement images
2. Rename them as shown above
3. Place them in the `img/` folder of your project
4. The images will automatically display in the cards

### Current Fallback:
If images are not found, the cards will display **colored gradient placeholders** with text labels:
- Purple gradient for Hackathon
- Blue gradient for LeetCode
- Pink gradient for Streak

## 🎨 Design Features:

✅ **Responsive Grid Layout:**
- Desktop (≥1024px): 3 cards in a row
- Tablet (768px-1023px): 2 cards per row
- Mobile (<768px): 1 card per row

✅ **Hover Effects:**
- Card lifts on hover with shadow
- Top border animation (purple gradient line)
- Image zooms in slightly
- Smooth transitions

✅ **Card Structure:**
- Image at top (250px height on desktop, 200px on mobile)
- Title (Space Grotesk font)
- Description
- Date badge (for dated achievements)

✅ **Consistent Theme:**
- Matches Education section styling
- Dark theme compatible
- Scroll reveal animations
- Same color palette

## 📋 Achievement Cards Content:

**Card 1: Binary Blitz Hackathon**
- Title: Binary Blitz Hackathon (Top 10 Rank)
- Description: Secured Top 10 rank among 700+ participants...
- Date: March 2024

**Card 2: LeetCode Problem Solving**
- Title: LeetCode Problem Solving
- Description: Solved 250+ problems on LeetCode...

**Card 3: LeetCode Streak**
- Title: LeetCode Streak
- Description: Maintained consistent LeetCode coding streak of 120+ days...

## 🎯 Testing:

1. Open your portfolio
2. Scroll to the Achievements section (between Skills and Certifications)
3. You'll see 3 cards with gradient placeholders
4. Add your images to see them displayed
5. Hover over cards to see animations
6. Resize browser to test responsive layout

## 📁 File Structure:

```
portfolio build ca1/
├── img/
│   ├── IMG_20251109_025013.jpg  (your profile photo)
│   ├── hackathon-achievement.jpg  (ADD THIS)
│   ├── leetcode-achievement.jpg   (ADD THIS)
│   └── streak-achievement.jpg     (ADD THIS)
├── index.html  (Updated with Achievements section)
└── style.css   (Updated with Achievements styling)
```

## 💡 Tips:

- Use high-quality photos for better visual appeal
- Ensure images have good lighting
- Consider using photos that show you in action (coding, at hackathon, etc.)
- If you don't have personal photos, use relevant coding/tech imagery
- The gradient placeholders look good too if you prefer minimal design!
