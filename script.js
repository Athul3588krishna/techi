
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
      
      const introVideo = document.getElementById('intro-video');
      const mainContent = document.getElementById('main-content');
  
      introVideo.addEventListener('ended', () => {
        // After the video ends, hide it and show the main content
        introVideo.style.display = 'none';
        mainContent.style.display = 'block';
      });
  
      // Fallback: If the video doesn't end after 5 seconds (e.g., unsupported browser)
      setTimeout(() => {
        introVideo.style.display = 'none';
        mainContent.style.display = 'block';
      }, 8000);

  