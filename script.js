// Select the mobile nav toggle button and the navbar
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navbarMobile = document.querySelector('.navbar-mobile');

// Add a click event listener to the toggle button
mobileNavToggle.addEventListener('click', () => {
  // Toggle the "open" class for the mobile navbar
  navbarMobile.classList.toggle('open');
  
  // Toggle the "active" class for the hamburger icon
  mobileNavToggle.classList.toggle('active');
});
