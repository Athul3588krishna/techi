
    document.addEventListener('DOMContentLoaded', () => {
        // Select the hamburger button and navbar container
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navbarContainer = document.querySelector('.navbar-container');

        // Add click event listener to toggle the menu
        mobileNavToggle.addEventListener('click', () => {
            navbarContainer.classList.toggle('mobile-nav-open'); // Toggle menu visibility
        });
    });

