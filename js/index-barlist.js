const slides = document.querySelectorAll('.slide');
const leftName = document.querySelector('.bar-name-left');
const rightName = document.querySelector('.bar-name-right');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translate(${i === index ? '0%' : '-100%'}, 0)`;
    });

    const barName = slides[index].getAttribute('data-bar').split(' ');
    leftName.textContent = barName[0];
    rightName.textContent = barName[1];
}

function splitImageAnimation() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(splitImageAnimation, 2500);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
