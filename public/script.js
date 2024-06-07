let slideIndex = 0;
const slides = document.querySelectorAll('.carousel .card');
const totalSlides = slides.length;

function showSlides() {
    if (slideIndex >= totalSlides) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = totalSlides - 1; }
    const carouselContainer = document.querySelector('.carousel-container');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const slideWidth = isMobile ? 100 : 33.33; // 100% for mobile, 33.33% for desktop
    carouselContainer.style.transform = `translateX(${-slideIndex * slideWidth}%)`;
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

function setCurrentSlide(index) {
    slideIndex = index;
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    window.setCurrentSlide = setCurrentSlide;
});

