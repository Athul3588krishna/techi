// Select the mobile toggle button and the navbar
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navbar = document.getElementById('navbar');

// When the mobile nav toggle button is clicked
mobileNavToggle.addEventListener('click', () => {
  navbar.classList.toggle('mobile-nav-open');
});
