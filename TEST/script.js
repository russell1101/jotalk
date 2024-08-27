document.addEventListener("DOMContentLoaded", () => {
    // 遍歷每個跑馬燈容器
    document.querySelectorAll('.marquee-container').forEach(container => {
        const marquee = container.querySelector('.marquee');
        const spanWidth = marquee.firstElementChild.offsetWidth;
        const containerWidth = container.offsetWidth;

        // 計算需要的克隆次數，確保無縫滾動
        const repeatCount = Math.ceil(containerWidth / spanWidth) * 4;

        for (let i = 0; i < repeatCount; i++) {
            marquee.appendChild(marquee.firstElementChild.cloneNode(true));
        }

        // 讓文字從網頁加載時就開始滾動
        marquee.style.animationPlayState = 'running';
    });

    // 控制字卡的移動和拖曳
    const feedbackCardsContainer = document.getElementById("feedbackCards");
    const feedbackCards = document.querySelectorAll(".feedback-card");
    const cardsWrapper = document.querySelector('.feedback-cards-container');

    // 克隆字卡以實現無縫循環
    function cloneFeedbackCards() {
        const totalCards = feedbackCards.length;

        for (let i = 0; i < totalCards; i++) {
            const clone = feedbackCards[i].cloneNode(true);
            feedbackCardsContainer.appendChild(clone);
        }
    }

    // 初始化字卡位置
    let currentIndex = 0;
    const cardWidth = feedbackCards[0].offsetWidth + 20; // 20是邊距

    function moveFeedbackCards() {
        const offset = currentIndex * cardWidth;

        // 移動字卡
        feedbackCardsContainer.style.transition = 'transform 0.5s ease';
        feedbackCardsContainer.style.transform = `translateX(-${offset}px)`;

        // 檢查第10張字卡是否出現在最右側
        if (currentIndex >= feedbackCards.length) {
            setTimeout(() => {
                feedbackCardsContainer.style.transition = 'none';
                feedbackCardsContainer.style.transform = 'translateX(0)';
                currentIndex = 0;

                // 重新複製字卡
                cloneFeedbackCards();
            }, 500); // 在動畫結束後重置位置
        } else {
            currentIndex++;
        }
    }

    // 初始化克隆字卡
    cloneFeedbackCards();

    // 設定字卡移動的間隔
    setInterval(moveFeedbackCards, 2000);

    // 拖曳功能的實作
    let isDragging = false;
    let startX, scrollLeft;

    // 確保拖曳功能不影響字卡的移動
    cardsWrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - cardsWrapper.offsetLeft;
        scrollLeft = cardsWrapper.scrollLeft;
    });

    cardsWrapper.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    cardsWrapper.addEventListener('mouseup', () => {
        isDragging = false;
    });

    cardsWrapper.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - cardsWrapper.offsetLeft;
        const walk = (x - startX) * 2; // 快速滾動
        cardsWrapper.scrollLeft = scrollLeft - walk;

        // 控制當前索引，避免空白區域出現
        const maxScrollLeft = cardsWrapper.scrollWidth - cardsWrapper.clientWidth;
        if (cardsWrapper.scrollLeft >= maxScrollLeft) {
            cardsWrapper.scrollLeft = maxScrollLeft; // 不超過右邊界
        } else if (cardsWrapper.scrollLeft <= 0) {
            cardsWrapper.scrollLeft = 0; // 不超過左邊界
        }
    });

    // 增加字卡容器的拖曳功能
    feedbackCardsContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - feedbackCardsContainer.offsetLeft;
        scrollLeft = feedbackCardsContainer.scrollLeft;
    });

    feedbackCardsContainer.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    feedbackCardsContainer.addEventListener('mouseup', () => {
        isDragging = false;
    });

    feedbackCardsContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - feedbackCardsContainer.offsetLeft;
        const walk = (x - startX) * 2; // 快速滾動
        feedbackCardsContainer.scrollLeft = scrollLeft - walk;

        // 控制當前索引，避免空白區域出現
        const maxScrollLeft = feedbackCardsContainer.scrollWidth - feedbackCardsContainer.clientWidth;
        if (feedbackCardsContainer.scrollLeft >= maxScrollLeft) {
            feedbackCardsContainer.scrollLeft = maxScrollLeft; // 不超過右邊界
        } else if (feedbackCardsContainer.scrollLeft <= 0) {
            feedbackCardsContainer.scrollLeft = 0; // 不超過左邊界
        }
    });
});