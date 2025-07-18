document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
  toggleButton?.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');

  function updateNavbarBackground() {
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  }

  // Run once on page load
  updateNavbarBackground();

  // Also run on scroll
  window.addEventListener('scroll', updateNavbarBackground);
});