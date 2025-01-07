let lastScrollTop = 0;
const header = document.getElementById('header');
const collegeDetails = document.querySelector('.college-details');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll Down - Hide header and college details
    header.classList.add('hidden');
    collegeDetails.style.display = 'none';
  } else {
    // Scroll Up - Show header and college details
    header.classList.remove('hidden');
    collegeDetails.style.display = 'block';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
});
