// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const rightMenu = document.querySelector('.right');

mobileMenuBtn.addEventListener('click', () => {
  rightMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.mobile-menu') && !e.target.closest('.right')) {
    rightMenu.classList.remove('active');
  }
});

let currentSlide = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider > .slide');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  console.log("Current slide: ", totalSlides);

  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

 // 🔵 Slider 1: .logo-slider – clone-remove logic for logos

const logoSlider = document.querySelector('.logo-slider');
const logoVisible = 5;
let logoIndex = 0;

const logoImages = logoSlider.querySelectorAll('img');

// Clone first 5 images for seamless looping
for (let i = 0; i < logoVisible; i++) {
  const clone = logoImages[i].cloneNode(true);
  logoSlider.appendChild(clone);
}

function autoLogoSlide() {
  logoIndex++;
  logoSlider.style.transition = 'transform 0.5s ease-in-out';
  logoSlider.style.transform = `translateX(-${logoIndex * 20}%)`;

  if (logoIndex === logoImages.length) {
    setTimeout(() => {
      logoSlider.style.transition = 'none';
      logoSlider.style.transform = 'translateX(0)';
      logoIndex = 0;
    }, 500);
  }
}

setInterval(autoLogoSlide, 2000);


// 🔴 Slider 2: .slieds – auto scroll with cloning for 5-visible slider

const productSlider = document.querySelector('.slieds');
const visibleCount = 5;
let index = 0;

const originalSlides = document.querySelectorAll('.bsi-slide');
const totalOriginal = originalSlides.length;

// Clone first 5 slides at the end for smooth infinite loop
for (let i = 0; i < visibleCount; i++) {
  const clone = originalSlides[i].cloneNode(true);
  productSlider.appendChild(clone);
}

function autoSlide() {
  index++;
  productSlider.style.transition = 'transform 0.5s ease-in-out';
  productSlider.style.transform = `translateX(-${index * 20}%)`;

  if (index === totalOriginal) {
    setTimeout(() => {
      productSlider.style.transition = 'none';
      productSlider.style.transform = 'translateX(0)';
      index = 0;
    }, 500); // must match transition duration
  }
}

setInterval(autoSlide, 2000);


