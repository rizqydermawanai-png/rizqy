document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }
});
