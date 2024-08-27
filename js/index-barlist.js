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

// index-4 跑馬燈
document.addEventListener("DOMContentLoaded", () => {
    initMarquee();  // 初始化跑馬燈
    initFeedbackCards();  // 初始化字卡移動
});

function initMarquee() {
    document.querySelectorAll('.marquee-container').forEach(container => {
        const marquee = container.querySelector('.marquee');
        const spanWidth = marquee.firstElementChild.offsetWidth;
        const containerWidth = container.offsetWidth;

        const repeatCount = Math.ceil(containerWidth / spanWidth) * 3;
        for (let i = 0; i < repeatCount; i++) {
            marquee.appendChild(marquee.firstElementChild.cloneNode(true));
        }

        marquee.style.animationPlayState = 'running';
    });
}

function initFeedbackCards() {
    const feedbackCardsContainer = document.getElementById("feedbackCards");
    const feedbackCards = document.querySelectorAll(".feedback-card");

    function cloneFeedbackCards() {
        const totalCards = feedbackCards.length;

        for (let i = 0; i < totalCards; i++) {
            const clone = feedbackCards[i].cloneNode(true);
            feedbackCardsContainer.appendChild(clone);
        }
    }

    let currentIndex = 0;
    const cardWidth = feedbackCards[0].offsetWidth + 20; // 20是邊距

    for (let i = 0; i < 4; i++) {
        cloneFeedbackCards();
    }

    function moveFeedbackCards() {
        const offset = currentIndex * cardWidth;

        feedbackCardsContainer.style.transition = 'transform 0.5s ease';
        feedbackCardsContainer.style.transform = `translateX(-${offset}px)`;

        if (currentIndex >= feedbackCards.length) {
            setTimeout(() => {
                feedbackCardsContainer.style.transition = 'none';
                feedbackCardsContainer.style.transform = 'translateX(0)';
                currentIndex = 0;
            }, 500);
        } else {
            currentIndex++;
        }
    }

    setInterval(moveFeedbackCards, 2000);
}

