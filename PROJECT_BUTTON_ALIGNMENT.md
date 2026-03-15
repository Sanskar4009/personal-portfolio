/* Project Card Button Alignment Fix */

/* Ensure all project cards have equal height */
.project-card {
    display: flex;
    flex-direction: column;
    height: 100%; /* Forces all cards to same height in grid */
}

/* Content area expands to fill available space */
.project-content {
    padding: 2.5rem;
    flex: 1; /* Takes up remaining space */
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Pushes button to bottom of card */
.project-btn {
    margin-top: auto; /* Auto margin pushes to bottom in flex container */
    align-self: flex-start;
}

/* Grid layout for equal-height columns */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}
