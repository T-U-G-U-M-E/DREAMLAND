// Clock function
function updateClock() {
  const clockElement = document.getElementById('clock');
  if (clockElement) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    clockElement.innerText = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0') + ' ' + time;
  }
}


let index = 0;
let slides = document.querySelectorAll(".slide");

function showSlides() {
  try {

    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
    setTimeout(showSlides, 4000); // change every 4 seconds
  } catch (error) {
    console.error('Error in showSlides:', error);
  }
}

function nextSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prevSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

showSlides();

// Device/Screen size detection
function detectDevice() {
  const width = window.innerWidth;
  document.body.classList.remove('mobile', 'tablet', 'desktop');
  if (width <= 480) {
    document.body.classList.add('mobile');
  } else if (width <= 768) {
    document.body.classList.add('tablet');
  } else {
    document.body.classList.add('desktop');
  }
  console.log('Screen width:', width, 'px - Detected device class:', document.body.className);
}



// Wait for DOM to be ready before updating clock
document.addEventListener('DOMContentLoaded', function () {
  detectDevice();
  updateClock();
  setInterval(updateClock, 1000);

  // Slider buttons
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  // Go to top button functionality
  const goTopBtn = document.getElementById('goTopBtn');
  if (goTopBtn) {
    goTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile side navigation functionality
  const burgerMenu = document.querySelector('.burger-menu');
  const sideNav = document.querySelector('.side-nav');
  const closeMenu = document.querySelector('.close-menu');
  const overlay = document.querySelector('.overlay');

  function openSideNav() {
    sideNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSideNav() {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (burgerMenu) {
    burgerMenu.addEventListener('click', openSideNav);
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', closeSideNav);
  }

  if (overlay) {
    overlay.addEventListener('click', closeSideNav);
  }

  // Close side navigation when clicking on navigation links (optional)
  const sideNavLinks = sideNav.querySelectorAll('.nav-item a');
  sideNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeSideNav();
    });
  });
});

// Listen for window resize to update device detection
window.addEventListener('resize', detectDevice);
// Fallback for if DOM is already loaded
if (document.readyState === 'loading') {
  // Still loading
} else {
  updateClock();
  setInterval(updateClock, 1000);

  // Go to top button functionality for already-loaded DOM
  const goTopBtn = document.getElementById('goTopBtn');
  if (goTopBtn) {
    goTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Go to top button functionality
const goTopBtn = document.getElementById('goTopBtn');
if (goTopBtn) {
  goTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}