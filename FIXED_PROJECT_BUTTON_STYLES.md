/* Fixed Project Button Styles */

/* Remove the old duplicate definition and use this complete one */

.project-btn {
    /* Layout - pushes button to bottom of card */
    margin-top: auto;
    align-self: flex-start;
    
    /* Display properties */
    display: inline-block;
    position: relative;
    
    /* Spacing */
    padding: 10px 18px;
    
    /* Typography */
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    
    /* Background & Border */
    background: linear-gradient(90deg, #7b61ff, #5f9eff);
    border-radius: 12px;
    
    /* Animation */
    transition: all 0.3s ease;
}

/* Arrow icon inside button */
.project-btn .arrow {
    margin-left: 6px;
    transition: margin-left 0.3s ease;
}

/* Hover effects */
.project-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(123, 97, 255, 0.5);
}

.project-btn:hover .arrow {
    margin-left: 12px;
}

/* IMPORTANT: Delete the duplicate .project-btn definition at line 2963 in style.css */
/* Keep only this consolidated version */
