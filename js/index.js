// topbar
window.addEventListener("scroll", function () {
    var topbar = document.getElementById("topbar");
    if (window.scrollY > 100) {
        topbar.classList.add("collapsed");
    } else {
        topbar.classList.remove("collapsed");
    }
});

// smoove 特效
$(document).ready(function () {
    $('.smoove').smoove({
        offset: '30%'
    });
});

// index-2 字卡滾動
document.addEventListener("DOMContentLoaded", function () {
    function duplicateCards(columnClass) {
        const column = document.querySelector(columnClass);
        const cards = column.innerHTML;
        column.innerHTML += cards + cards + cards + cards;
    }

    duplicateCards('.column-left');
    duplicateCards('.column-right');
});

// index-2 字卡懸浮停止
document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.addEventListener('mouseover', () => {
            column.style.animationPlayState = 'paused';
        });
        column.addEventListener('mouseout', () => {
            column.style.animationPlayState = 'running';
        });
    });
});

// index-3 店名切換
const slides = document.querySelectorAll('.slide');
const leftName = document.querySelector('.bar-name-left');
const rightName = document.querySelector('.bar-name-right');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translate(${i === index ? '0%' : '-100%'}, 0)`;
    });

    const barName = slides[index].getAttribute('data-bar').split('-');
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

// index-4 跑馬燈+反饋字卡
document.addEventListener("DOMContentLoaded", () => {
    const marqueeContainers = document.querySelectorAll('.marquee-container');

    marqueeContainers.forEach(container => {

        const marqueeContent = container.querySelector('.marquee-content');
        const contentHTML = marqueeContent.innerHTML;
        // console.log('source:' + marqueeContent.innerHTML);

        for (let i = 0; i < 10; i++) {
            marqueeContent.innerHTML += contentHTML;
            // console.log(`no${i}:` + marqueeContent.innerHTML);
        }

    });

    const feedbackCardsContainer = document.querySelector('.feedback-cards-container .feedback-cards');
    const feedbackCards = feedbackCardsContainer.innerHTML;

    for (let i = 0; i < 3; i++) {
        feedbackCardsContainer.innerHTML += feedbackCards;
    }

    let currentIndex = 0;
    const totalCards = document.querySelectorAll('.feedback-card').length;
    const cardWidth = document.querySelector('.feedback-card').offsetWidth + 20; // 包括 margin

    function moveFeedbackCards() {
        currentIndex++;
        feedbackCardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        if (currentIndex >= totalCards / 4) {
            setTimeout(() => {
                feedbackCardsContainer.style.transition = 'none';
                feedbackCardsContainer.style.transform = 'translateX(0)';
                currentIndex = 0;
            }, 3000);
        }
    }

    setInterval(() => {
        feedbackCardsContainer.style.transition = 'transform 3s ease';
        moveFeedbackCards();
    }, 4000);
});