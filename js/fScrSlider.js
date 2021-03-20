'use strict';

const allSlides = document.querySelectorAll('.slider__group_slide');
const nextSlide = document.querySelector('.slider__group_next-slide');
const prevSlide = document.querySelector('.slider__group_prev-slide');

let currentSlide = 0;

const SLIDE_INTERVAL = setInterval(showSlides, 3000);

// NextSlide on click
nextSlide.addEventListener('click', function() {
    allSlides[currentSlide].className = 'slider__group_slide';
    currentSlide = currentSlide +1;

    if (currentSlide > (allSlides.length - 1)) {
        currentSlide = 0;
    }

    allSlides[currentSlide].className = 'slider__group_slide active';
});

// PrevSlide on click
prevSlide.addEventListener('click', function() {
    allSlides[currentSlide].className = 'slider__group_slide';
    currentSlide = currentSlide -1;

    if (currentSlide < 0) {
        currentSlide = allSlides.length - 1;
    }

    allSlides[currentSlide].className = 'slider__group_slide active';
});

function showSlides() {

    allSlides[currentSlide].className = 'slider__group_slide';
    currentSlide = (currentSlide + 1) % allSlides.length;
    allSlides[currentSlide].className = 'slider__group_slide active';
}
