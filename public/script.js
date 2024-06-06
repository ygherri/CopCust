// let slideIndex = 0;
// const slides = document.querySelectorAll('.carousel .card');
// const totalSlides = slides.length;

// function showSlides() {
//     if (slideIndex >= totalSlides) { slideIndex = 0; }
//     if (slideIndex < 0) { slideIndex = totalSlides - 1; }
//     const carouselContainer = document.querySelector('.carousel-container');
//     // carouselContainer.style.transform = `translateX(${-slideIndex * 33.33}%)`;
//     const dots = document.querySelectorAll('.dot');
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[slideIndex].classList.add('active');
// }

// function nextSlide() {
//     slideIndex++;
//     showSlides();
// }

// function prevSlide() {
//     slideIndex--;
//     showSlides();
// }

// function setCurrentSlide(index) {
//     slideIndex = index;
//     showSlides();
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlides();
//     // Attach functions to window object to make them accessible in the HTML
//     window.nextSlide = nextSlide;
//     window.prevSlide = prevSlide;
//     window.setCurrentSlide = setCurrentSlide;
// });
