const slides = document.querySelectorAll('.hero');
const next = document.querySelectorAll('.nav__nextArrow');
const prev = document.querySelectorAll('.nav__prevArrow');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to [0] for infinite scroll
    slides[4].classList.add('current');
    
  }
  //uncomment for infinite scroll too
  //setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last [4] for infinite scroll
    slides[0].classList.add('current');
  }
  //uncomment for infinite scroll too
  //setTimeout(() => current.classList.remove('current'));
};

// Button events
next.forEach(item => {
    item.addEventListener('click', event => {
        nextSlide();
        if (auto) {
          clearInterval(slideInterval);
          slideInterval = setInterval(nextSlide, intervalTime);
        }
    })
  })
prev.forEach(item => {
    item.addEventListener('click', event => {
        prevSlide();
        if (auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    })
  })


// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
