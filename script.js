
    // Wait for the DOM to fully load
    document.addEventListener('DOMContentLoaded', () => {
        
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navbarContainer = document.querySelector('#main-navbar');

        // Ensure the elements exist before adding event listeners
        if (mobileNavToggle && navbarContainer) {
            // When the mobile nav toggle button is clicked
            mobileNavToggle.addEventListener('click', () => {
                navbarContainer.classList.toggle('mobile-nav-open'); // Toggles the class to show/hide the menu

                // Get the icon inside the toggle button
                const toggleIcon = mobileNavToggle.querySelector('i');

                if (toggleIcon) {
                    toggleIcon.classList.toggle('bi-list'); // Toggle Hamburger icon
                    toggleIcon.classList.toggle('bi-x'); // Toggle Close icon
                }
            });
        } else {
            console.error('Mobile navigation toggle or navbar container not found.');
        }
    });

