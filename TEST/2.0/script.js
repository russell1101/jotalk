document.addEventListener("DOMContentLoaded", () => {
    const marqueeContainers = document.querySelectorAll('.marquee-container');
    
    marqueeContainers.forEach(container => {
        const marqueeContent = container.querySelector('.marquee-content');
        const contentHTML = marqueeContent.innerHTML;
        
        for (let i = 0; i < 3; i++) { // 總共複製3次，使得內容總數量為4次
            marqueeContent.innerHTML += contentHTML;
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
