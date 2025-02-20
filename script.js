let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function updateSlidePosition() {
    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}
