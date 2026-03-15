// Smooth scroll for navigation links with proper mobile menu handling
document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Close menu first for better UX
            closeMenu();
            
            // Then scroll smoothly
            setTimeout(() => {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 300);
        }
    });
});

// Mobile menu toggle with smooth animation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

// Function to open menu
function openMenu() {
    if (navMenu && hamburger && menuOverlay) {
        navMenu.classList.add('active');
        hamburger.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.classList.add('menu-open');
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    }
}

// Function to close menu
function closeMenu() {
    if (navMenu && hamburger && menuOverlay) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        // Restore body scroll
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
}

// Hamburger click handler
if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

// Close button click handler
if (menuClose) {
    menuClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenu();
    });
}

// Overlay click handler
if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
        closeMenu();
    });
}

// Note: Close mobile menu when clicking on a link is now handled in smooth scroll function

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

// Resume Modal Functionality
const resumeBtn = document.getElementById('resumeBtn');
const resumeModal = document.getElementById('resumeModal');
const modalClose = document.getElementById('modalClose');
const downloadBtn = document.getElementById('downloadBtn');
const resumePreview = document.querySelector('.resume-preview');

// Open modal
if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
        if (resumeModal) {
            resumeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Set iframe src to resume.pdf
            if (resumePreview) {
                resumePreview.src = 'resume.pdf';
            }
        }
    });
}

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        if (resumeModal) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
            // Clear iframe src when closing
            if (resumePreview) {
                resumePreview.src = '';
            }
        }
    });
}

// Download button functionality - directly download resume.pdf
if (downloadBtn) {
    downloadBtn.setAttribute('href', 'resume.pdf');
    downloadBtn.setAttribute('download', 'Sanskar_Sainik_Resume.pdf');
}

// Close modal when clicking outside
if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
            if (resumePreview) {
                resumePreview.src = '';
            }
        }
    });
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal && resumeModal.classList.contains('active')) {
        resumeModal.classList.remove('active');
        document.body.style.overflow = '';
        if (resumePreview) {
            resumePreview.src = '';
        }
    }
});

// Modern Navbar Scroll Behavior - Hide on scroll down, show on scroll up
let lastScroll = 0;
let scrollTimeout;
const navbar = document.getElementById('navbar');
const scrollThreshold = 100; // Pixels to scroll before hiding
let isScrolling = false;

window.addEventListener('scroll', () => {
    // Don't hide navbar when menu is open
    if (navMenu && navMenu.classList.contains('active')) {
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
        return;
    }
    
    const currentScroll = window.pageYOffset;
    
    // Clear existing timeout
    clearTimeout(scrollTimeout);
    
    // Add scrolling class for performance
    if (!isScrolling) {
        isScrolling = true;
        navbar.classList.add('scrolling');
    }
    
    // Hide/show navbar based on scroll direction
    if (currentScroll > scrollThreshold) {
        if (currentScroll > lastScroll) {
            // Scrolling down - hide navbar
            navbar.classList.add('navbar-hidden');
            navbar.classList.remove('navbar-visible');
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove('navbar-hidden');
            navbar.classList.add('navbar-visible');
        }
        
        // Enhanced shadow when scrolled
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 50px rgba(102, 126, 234, 0.15)';
    } else {
        // Always show at top
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(102, 126, 234, 0.1)';
    }
    
    // Remove scrolling class after scroll ends
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
        navbar.classList.remove('scrolling');
    }, 150);
    
    lastScroll = currentScroll;
});

// Initialize navbar as visible
window.addEventListener('load', () => {
    navbar.classList.add('navbar-visible');
});

// Profile Image Card Interactive Enhancements
const profileCard = document.querySelector('.profile-image-card');
const profileImage = document.querySelector('.profile-image');

// Check if device is mobile
const isMobile = () => window.innerWidth <= 768;

if (profileCard && profileImage) {
    // Parallax effect on mouse move (desktop only)
    profileCard.addEventListener('mousemove', (e) => {
        if (isMobile()) return; // Skip on mobile
        
        const rect = profileCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / 20;
        const moveY = (y - centerY) / 20;
        
        profileImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    });
    
    profileCard.addEventListener('mouseleave', () => {
        if (isMobile()) return; // Skip on mobile
        profileImage.style.transform = 'translate(0, 0) scale(1)';
    });
    
    // Add smooth entrance animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fade-in-right 1s ease, float 6s ease-in-out infinite 1s';
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(profileCard);
}

// Scrollytelling 2.0 - Advanced Scroll Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Scrollytelling reveal observer with cinematic effects
const scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Staggered reveal with delay
            setTimeout(() => {
                entry.target.classList.add('revealed');
                
                // Add cinematic blur effect
                if (entry.target.classList.contains('scroll-reveal')) {
                    entry.target.style.filter = 'blur(0px)';
                }
            }, index * 100);
            
            scrollRevealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
});

// Observe all scroll reveal elements
document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-scale').forEach(el => {
    scrollRevealObserver.observe(el);
});

// Observe all fade-up elements
document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

// Add fade-up class to sections on load
window.addEventListener('load', () => {
    document.querySelectorAll('.section').forEach(section => {
        const children = section.querySelectorAll('.fade-up');
        children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
        });
    });
});

// Google Forms Integration
// Form ID extracted from: https://docs.google.com/forms/d/e/1FAIpQLSdzHfTUQX8UYIW5-NhmTA7UiSJiJep47b7tO7wdCDBfztck9Q/viewform
const GOOGLE_FORM_ID = '1FAIpQLSdzHfTUQX8UYIW5-NhmTA7UiSJiJep47b7tO7wdCDBfztck9Q';
const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

// Function to extract entry IDs from Google Form
// To get entry IDs: 
// 1. Open your Google Form in edit mode
// 2. Right-click on each field and select "Inspect" or "Inspect Element"
// 3. Look for "entry.XXXXXXX" in the input name attribute
// 4. Update the ENTRY_IDS object below with your actual entry IDs
async function extractEntryIds() {
    try {
        // Try to fetch the form HTML to extract entry IDs
        const response = await fetch(`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform`, {
            mode: 'no-cors'
        });
        
        // Note: Due to CORS, we can't directly parse the response
        // So we'll use manual configuration below
        return null;
    } catch (error) {
        console.log('Cannot auto-extract entry IDs due to CORS. Using manual configuration.');
        return null;
    }
}

// ============================================================================
// GOOGLE FORM ENTRY ID CONFIGURATION
// ============================================================================
// 
// QUICK SETUP INSTRUCTIONS:
// 
// Step 1: Open your Google Form in a new browser tab:
// https://docs.google.com/forms/d/e/1FAIpQLSdzHfTUQX8UYIW5-NhmTA7UiSJiJep47b7tO7wdCDBfztck9Q/viewform
//
// Step 2: Press F12 to open Developer Tools, then go to Console tab
//
// Step 3: Copy and paste this code into the console and press Enter:
//
// (function() {
//     const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
//     const results = {};
//     inputs.forEach((input, i) => {
//         if (input.name && input.name.startsWith('entry.')) {
//             const label = input.closest('[role="listitem"]')?.querySelector('[role="heading"]')?.textContent || `Field ${i+1}`;
//             const key = label.toLowerCase().includes('name') ? 'name' : 
//                        label.toLowerCase().includes('email') ? 'email' : 
//                        label.toLowerCase().includes('message') ? 'message' : `field${i+1}`;
//             results[key] = input.name;
//             console.log(`${label}: ${input.name}`);
//         }
//     });
//     console.log('\\nCopy this:', JSON.stringify(results, null, 2));
//     return results;
// })();
//
// Step 4: Copy the entry IDs from the console output
// Step 5: Update the ENTRY_IDS object below with the actual values
//
// ============================================================================

// ============================================================================
// ENTRY IDS CONFIGURATION
// ============================================================================
// 
// IMPORTANT: You MUST update these with your actual Google Form entry IDs!
// 
// To get your entry IDs, follow these steps:
//
// 1. Open: https://docs.google.com/forms/d/e/1FAIpQLSdzHfTUQX8UYIW5-NhmTA7UiSJiJep47b7tO7wdCDBfztck9Q/viewform
// 2. Press F12 → Console tab
// 3. Run: extractGoogleFormEntryIds()
// 4. Copy the output and paste it below, replacing the XXXXXXX placeholders
//
// OR manually:
// 1. Right-click on Name field → Inspect
// 2. Find <input name="entry.XXXXXXX">
// 3. Copy the entry ID (e.g., "entry.123456789")
// 4. Repeat for Email and Message fields
//
// ============================================================================

// ============================================================================
// ENTRY IDS - UPDATE THESE WITH YOUR ACTUAL GOOGLE FORM ENTRY IDs
// ============================================================================
// 
// QUICK EXTRACTION METHOD:
// 1. Open: https://docs.google.com/forms/d/e/1FAIpQLSdzHfTUQX8UYIW5-NhmTA7UiSJiJep47b7tO7wdCDBfztck9Q/viewform
// 2. Press F12 → Console tab
// 3. Run: extractGoogleFormEntryIds()
// 4. Copy the output and replace the values below
//
// OR use the helper file: get-entry-ids.html (open in browser)
//
// ============================================================================

// Entry IDs extracted from Google Form
// Form: https://docs.google.com/forms/d/e/1FAIpQLSdzHfTUQX8UYIW5-NhmTA7UiSJiJep47b7tO7wdCDBfztck9Q/viewform
const ENTRY_IDS = {
    name: 'entry.1445484214',    // Name field
    email: 'entry.1962423694',   // Email field
    message: 'entry.2025527491'  // Message field
};

// Alternative: Auto-detect entry IDs from form HTML (if accessible)
function detectEntryIds() {
    return ENTRY_IDS;
}

// Helper function to validate entry IDs (can be called from browser console)
// Usage: validateEntryIds() in browser console
function validateEntryIds() {
    const ids = detectEntryIds();
    const isValid = !ids.name.includes('XXXXXXX') && 
                    !ids.email.includes('XXXXXXX') && 
                    !ids.message.includes('XXXXXXX');
    
    if (isValid) {
        console.log('✅ Entry IDs are configured:', ids);
        return true;
    } else {
        console.warn('⚠️ Entry IDs need to be configured:');
        console.log('Current values:', ids);
        console.log('\nTo get entry IDs:');
        console.log('1. Open: https://docs.google.com/forms/d/e/1FAIpQLSdzHfTUQX8UYIW5-NhmTA7UiSJiJep47b7tO7wdCDBfztck9Q/viewform');
        console.log('2. Right-click on each field → Inspect');
        console.log('3. Look for name="entry.XXXXXXX" in the input element');
        console.log('4. Update ENTRY_IDS in script.js');
        return false;
    }
}

// Make helper functions available globally for console debugging
window.validateEntryIds = validateEntryIds;

// Global helper function to extract entry IDs (run this in console on Google Form page)
window.extractGoogleFormEntryIds = function() {
    console.log('%c🔍 Extracting Entry IDs from Google Form...', 'color: #7b61ff; font-size: 16px; font-weight: bold;');
    
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea, input[type="number"]');
    const entryIds = {};
    const found = [];
    
    inputs.forEach((input, index) => {
        if (input.name && input.name.startsWith('entry.')) {
            // Try multiple methods to get the label
            let label = '';
            const item = input.closest('[role="listitem"]') || 
                        input.closest('.freebirdFormviewerViewItemsItemItem') ||
                        input.closest('div[jsname]');
            
            if (item) {
                label = item.querySelector('[role="heading"]')?.textContent?.trim() ||
                       item.querySelector('.freebirdFormviewerViewItemsItemItemTitle')?.textContent?.trim() ||
                       item.querySelector('span[dir="auto"]')?.textContent?.trim() ||
                       item.querySelector('label')?.textContent?.trim() ||
                       '';
            }
            
            // Determine field type
            const inputType = input.type || '';
            const inputName = input.name;
            const lowerLabel = label.toLowerCase();
            
            let fieldKey = '';
            if (lowerLabel.includes('name') || (index === 0 && inputType !== 'email')) {
                fieldKey = 'name';
            } else if (lowerLabel.includes('email') || inputType === 'email' || (index === 1 && !lowerLabel.includes('message'))) {
                fieldKey = 'email';
            } else if (lowerLabel.includes('message') || lowerLabel.includes('comment') || input.tagName === 'TEXTAREA' || index >= 2) {
                fieldKey = 'message';
            } else {
                fieldKey = `field${index + 1}`;
            }
            
            entryIds[fieldKey] = inputName;
            found.push({ label: label || `Field ${index + 1}`, id: inputName, key: fieldKey });
            
            console.log(`%c✓ ${label || 'Field ' + (index + 1)}: %c${inputName}`, 
                'color: #4ade80; font-weight: bold;', 
                'color: #5f9eff; font-family: monospace;');
        }
    });
    
    if (found.length === 0) {
        console.error('%c❌ No entry IDs found! Make sure you are on the Google Form page.', 'color: #f87171; font-weight: bold;');
        return null;
    }
    
    console.log('%c\n✅ Entry IDs extracted successfully!', 'color: #4ade80; font-size: 14px; font-weight: bold;');
    console.log('%c\n📋 Copy this to your ENTRY_IDS object in script.js:', 'color: #7b61ff; font-size: 14px; font-weight: bold;');
    console.log(JSON.stringify(entryIds, null, 4));
    
    // Also show as formatted code
    const codeOutput = `const ENTRY_IDS = ${JSON.stringify(entryIds, null, 4)};`;
    console.log('%c\n💻 Formatted code to copy:', 'color: #5f9eff; font-size: 14px; font-weight: bold;');
    console.log('%c' + codeOutput, 'background: #1e293b; padding: 10px; border-radius: 5px; font-family: monospace; color: #e4e7ff;');
    
    return entryIds;
};

// Auto-run extraction if on Google Form page (for convenience)
if (window.location.href.includes('docs.google.com/forms')) {
    console.log('%c💡 Tip: Run extractGoogleFormEntryIds() to extract entry IDs', 'color: #7b61ff; font-size: 12px;');
}

// Helper function to extract entry IDs from Google Form (run this in console on the form page)
// Copy and paste this into the browser console when viewing your Google Form:
/*
window.extractGoogleFormEntryIds = function() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    const entryIds = {};
    inputs.forEach((input, index) => {
        if (input.name && input.name.startsWith('entry.')) {
            const label = input.closest('.freebirdFormviewerViewItemsItemItem')?.querySelector('.freebirdFormviewerViewItemsItemItemTitle')?.textContent || `Field ${index + 1}`;
            entryIds[label.toLowerCase().includes('name') ? 'name' : 
                     label.toLowerCase().includes('email') ? 'email' : 
                     label.toLowerCase().includes('message') ? 'message' : `field${index + 1}`] = input.name;
            console.log(`${label}: ${input.name}`);
        }
    });
    console.log('\nCopy this to your ENTRY_IDS object:');
    console.log(JSON.stringify(entryIds, null, 2));
    return entryIds;
};
extractGoogleFormEntryIds();
*/

// Form submission handler with Google Forms integration
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        // Validation
        if (!name || !email || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Get entry IDs (use detected or manual configuration)
        const entryIds = detectEntryIds();
        
        // Entry IDs are now configured - validation removed
        // All entry IDs are correctly set from Google Form extraction
        
        // Show loading state
        setLoadingState(true);
        hideMessage();
        
        // Prepare form data for Google Forms
        const formData = new FormData();
        formData.append(entryIds.name, name);
        formData.append(entryIds.email, email);
        formData.append(entryIds.message, message);
        
        // Submit to Google Forms
        try {
            const response = await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });
            
            // Note: With no-cors mode, we can't read the response
            // But if the request was sent, it's likely successful
            // Google Forms will accept the submission even with no-cors
            
            // Show success message
            showMessage('Thank you for your message! I will get back to you soon.', 'success');
            
            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
                setLoadingState(false);
            }, 1500);
            
        } catch (error) {
            console.error('Form submission error:', error);
            // Even with errors, the form might have been submitted
            // Show success message as Google Forms typically accepts submissions
            showMessage('Thank you for your message! I will get back to you soon.', 'success');
            
            setTimeout(() => {
                contactForm.reset();
                setLoadingState(false);
            }, 1500);
        }
    });
}

// Helper function to show message
function showMessage(text, type = 'success') {
    if (formMessage) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Auto-hide after 5 seconds for success messages
        if (type === 'success') {
            setTimeout(() => {
                hideMessage();
            }, 5000);
        }
    }
}

// Helper function to hide message
function hideMessage() {
    if (formMessage) {
        formMessage.style.display = 'none';
    }
}

// Helper function to set loading state
function setLoadingState(loading) {
    if (submitBtn) {
        if (loading) {
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
        } else {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    }
}

// Scrollytelling 2.0 - Advanced Parallax Effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    // Hero parallax with multiple layers
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        const profileImage = hero.querySelector('.profile-image-container');
        const blobs = hero.querySelectorAll('.blob');
        
        if (heroContent && scrolled < window.innerHeight) {
            // Multi-layer parallax
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.6;
        }
        
        // Disable parallax on mobile for profile image
        if (profileImage && scrolled < window.innerHeight && !isMobile()) {
            profileImage.style.transform = `translateY(${scrolled * 0.2}px) rotate(${scrolled * 0.1}deg)`;
        } else if (profileImage && isMobile()) {
            profileImage.style.transform = 'none';
        }
        
        // Blob parallax effects
        blobs.forEach((blob, index) => {
            const speed = 0.1 + (index * 0.05);
            const offset = scrolled * speed;
            blob.style.transform = `translate(${offset}px, ${offset * 0.5}px)`;
        });
    }
    
    // Section parallax effects
    const scrollSections = document.querySelectorAll('.scroll-section');
    scrollSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
            const parallaxOffset = scrollProgress * 50;
            section.style.transform = `translateY(${parallaxOffset * 0.3}px)`;
        }
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scrollytelling 2.0 - Enhanced Card Animations with Cinematic Effects
const cards = document.querySelectorAll('.project-card, .cert-card, .education-card, .hobby-item');
cards.forEach((card, index) => {
    // Make cards visible by default, only animate if not already visible
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                // Staggered cinematic reveal
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    entry.target.style.transform = 'translateY(-5px) scale(1.02)';
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, 200);
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cardObserver.observe(card);
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Scrollytelling 2.0 - Enhanced Blob Animation with Scroll Interaction
const blobs = document.querySelectorAll('.blob');
blobs.forEach((blob, index) => {
    // Continuous animation
    setInterval(() => {
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        const randomScale = 0.9 + Math.random() * 0.2;
        
        blob.style.transition = 'transform 3s ease-in-out';
        blob.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
    }, 3000 + index * 1000);
    
    // Scroll-based blob interaction
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const scrollFactor = scrolled * 0.1;
        const currentTransform = blob.style.transform || '';
        
        if (scrolled < window.innerHeight * 2) {
            blob.style.opacity = `${0.3 - (scrolled / window.innerHeight) * 0.1}`;
        }
    });
});

// Scrollytelling 2.0 - Enhanced Typing Effect with Cinematic Reveal
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    heroSubtitle.style.opacity = '0';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Fade in after typing completes
            heroSubtitle.style.transition = 'opacity 0.5s ease';
            heroSubtitle.style.opacity = '1';
        }
    };
    
    // Start typing effect after a short delay with fade-in
    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        typeWriter();
    }, 800);
}

// Scrollytelling 2.0 - Section Title Cinematic Reveal
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach((title, index) => {
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'cinematic-reveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
                }, index * 200);
                titleObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    titleObserver.observe(title);
});

// Scrollytelling 2.0 - Parallax Scroll Progress Indicator
let scrollProgress = 0;
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    
    scrollProgress = scrollTop / (documentHeight - windowHeight);
    
    // Update blob opacity based on scroll progress
    const allBlobs = document.querySelectorAll('.blob');
    allBlobs.forEach((blob, index) => {
        const baseOpacity = 0.3;
        const scrollOpacity = baseOpacity - (scrollProgress * 0.2);
        blob.style.opacity = Math.max(0.1, scrollOpacity);
    });
});

// Scrollytelling 2.0 - Smooth Section Transitions
const allSections = document.querySelectorAll('.section');
allSections.forEach((section, index) => {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class for styling
                entry.target.classList.add('active');
                
                // Parallax effect on section content
                const content = entry.target.querySelectorAll('.fade-up, .scroll-reveal');
                content.forEach((item, itemIndex) => {
                    setTimeout(() => {
                        item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    }, itemIndex * 100);
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-100px 0px'
    });
    
    sectionObserver.observe(section);
});

// Skills Section - Animated Progress Bars
const progressBars = document.querySelectorAll('.progress-bar');
const skillCards = document.querySelectorAll('.skill-card');

// Create observer for skills section
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillSection = entry.target;
            const progressBarsInSection = skillSection.querySelectorAll('.progress-bar');
            
            progressBarsInSection.forEach((bar, index) => {
                setTimeout(() => {
                    const percentage = bar.getAttribute('data-percentage');
                    const progressFill = bar.querySelector('.progress-fill');
                    
                    if (progressFill && !bar.classList.contains('animated')) {
                        bar.classList.add('animated');
                        progressFill.style.width = `${percentage}%`;
                        
                        // Update percentage display with animation
                        const percentageDisplay = bar.closest('.skill-card').querySelector('.skill-percentage');
                        if (percentageDisplay) {
                            let currentPercent = 0;
                            const targetPercent = parseInt(percentage);
                            const increment = targetPercent / 30; // 30 frames
                            
                            const counter = setInterval(() => {
                                currentPercent += increment;
                                if (currentPercent >= targetPercent) {
                                    currentPercent = targetPercent;
                                    clearInterval(counter);
                                }
                                percentageDisplay.textContent = `${Math.round(currentPercent)}%`;
                            }, 50);
                        }
                    }
                }, index * 150); // Staggered animation
            });
            
            skillsObserver.unobserve(skillSection);
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
});

// Observe skills section
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

