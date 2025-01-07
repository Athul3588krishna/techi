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
