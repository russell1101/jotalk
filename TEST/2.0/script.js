// 上方跑馬燈設定
function startMarquee(element, duration) {
    const marqueeContent = element.innerHTML;
    element.innerHTML += marqueeContent; // 複製內容以無縫滾動
    element.style.animationDuration = duration + 's';
}

startMarquee(document.querySelector('.marquee-up'), 15);
startMarquee(document.querySelector('.marquee-down'), 15);

// 中間回饋卡片設定
const feedbackCards = document.getElementById('feedbackCards');
let cardIndex = 0;
const totalCards = document.querySelectorAll('.feedback-card').length;

function moveCards() {
    cardIndex++;
    feedbackCards.style.transform = `translateX(-${cardIndex * 310}px)`;
    if (cardIndex >= totalCards) {
        setTimeout(() => {
            feedbackCards.style.transition = 'none';
            feedbackCards.style.transform = 'translateX(0)';
            cardIndex = 0;
            setTimeout(() => {
                feedbackCards.style.transition = 'transform 0.5s ease';
            }, 50);
        }, 500);
    }
}

setInterval(moveCards, 2000);