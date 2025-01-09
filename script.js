
    document.addEventListener('DOMContentLoaded', () => {
        // Select the hamburger button and navbar container
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navbarContainer = document.querySelector('.navbar-container');

        // Add click event listener to toggle the menu
        mobileNavToggle.addEventListener('click', () => {
            navbarContainer.classList.toggle('mobile-nav-open'); // Toggle menu visibility
        });
    });

    document.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const scrollPosition = window.scrollY;
      
        // Check if the user has scrolled to the bottom of the page
        if (scrollPosition > window.innerHeight) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
      });
      