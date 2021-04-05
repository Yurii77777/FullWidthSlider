'use strict';

// Slider v2.0.0
// with active dots and new logic engine

const allSlides = document.querySelectorAll('.slider__group_slide');
const allDots = document.querySelectorAll('.slider__group_dot');

let currentSlideIndex = 0;
let currentDotIndex = 0;
let userClick;

function getActiveSlide() {
    // Функція знаходить поточний активний слайд і записує його індекс в currentSlideIndex
    // Функция определяет текущий активный слайд и записывает его индекс в currentSlideIndex
    // Function get current active slide and write its index in currentSlideIndex
    
    const activeSlide = document.querySelectorAll('.slider__group_slide.active');
    const slides = Array.from(allSlides);

    slides.forEach(function(item) {
        if (item === activeSlide[0]) {
            currentSlideIndex = slides.indexOf(item);
            currentDotIndex = currentSlideIndex;
        }
    });

    return currentSlideIndex;
}

function showSlides() {
    // Загальна функція показу слайдів
    // Общая функция показа слайдов
    // General function to show slides

    getActiveSlide();
    
    allSlides[currentSlideIndex].className = 'slider__group_slide';
    allDots[currentDotIndex].className = 'slider__group_dot';
    
    currentSlideIndex = (currentSlideIndex + 1) % allSlides.length;
    currentDotIndex = (currentDotIndex + 1) % allDots.length;
    
    allSlides[currentSlideIndex].className = 'slider__group_slide active';
    allDots[currentDotIndex].className = 'slider__group_dot active';
}

function showSlideByDotClick() {
    // Функція показу слайдів по кліку на крапці
    // Функция показа слайдов по клику на точке
    // Function to show slides by click on dot
    
    getActiveSlide();

    allSlides[currentSlideIndex].className = 'slider__group_slide';
    allDots[currentDotIndex].className = 'slider__group_dot';

    userClick.className = 'slider__group_dot active';

    let allDotsArray = Array.from(allDots);
    let activeDot = allDotsArray.indexOf(userClick);

    allSlides[activeDot].className = 'slider__group_slide active';
}

function showPrevSlide() {
    // Функція показу слайдів по кліку на кнопку Назад (Вліво)
    // Функция показа слайдов по клику на кнопке Назад (Влево)
    // Function to show slides by click on button Prev (Left)

    getActiveSlide();

    allSlides[currentSlideIndex].className = 'slider__group_slide';
    allDots[currentDotIndex].className = 'slider__group_dot';

    currentSlideIndex = currentSlideIndex - 1;
    currentDotIndex = currentDotIndex - 1;

    if (currentSlideIndex < 0 && currentDotIndex < 0) {
        currentSlideIndex = allSlides.length - 1;
        currentDotIndex = allDots.length - 1;
    }

    allSlides[currentSlideIndex].className = 'slider__group_slide active';
    allDots[currentDotIndex].className = 'slider__group_dot active';
}

document.addEventListener('click', function(event) {
    userClick = event.target;

    if (userClick.className === 'slider__group_dot') {
        showSlideByDotClick();
    }

    if (userClick.className === 'slider__group_next-slide' || userClick.className === 'slider__group_next-slide-icon') {
        showSlides();
    }

    if (userClick.className === 'slider__group_prev-slide' || userClick.className === 'slider__group_prev-slide-icon') {
        showPrevSlide();
    }
});

const SLIDE_INTERVAL = setInterval(showSlides, 3000);
