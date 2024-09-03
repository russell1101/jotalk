setTimeout(function () {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
}, 3000); // 後隱藏GIF



document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.category');
    const contents = document.querySelectorAll('.news_content');
    const loadMoreBtn = document.getElementById('load-more');

    categories.forEach(category => {
        category.addEventListener('click', function () {
            // 取消所有類別的選中狀態
            categories.forEach(cat => cat.classList.remove('active'));
            // 隱藏所有文章內容
            contents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active');

                // 隱藏所有文章
                const articles = content.querySelectorAll('.article');
                articles.forEach(article => article.classList.add('hidden'));
            });

            // 設置當前選中的類別和文章內容
            this.classList.add('active');
            const targetContent = document.getElementById(this.dataset.target);
            targetContent.classList.remove('hidden');
            targetContent.classList.add('active');

            // 顯示前8篇文章
            const articlesToShow = targetContent.querySelectorAll('.article.hidden');
            for (let i = 0; i < 3 && i < articlesToShow.length; i++) {
                articlesToShow[i].classList.remove('hidden');
            }

            // 重置載入更多按鈕
            resetLoadMoreButton();
        });
    });

    loadMoreBtn.addEventListener('click', function () {
        const activeContent = document.querySelector('.news_content.active');
        const hiddenArticles = activeContent.querySelectorAll('.article.hidden');

        if (hiddenArticles.length > 0) {
            hiddenArticles[0].classList.remove('hidden');
            hiddenArticles[1]?.classList.remove('hidden');
        }

        if (hiddenArticles.length <= 2) {
            loadMoreBtn.style.display = 'none';
        }
    });

    function resetLoadMoreButton() {
        const activeContent = document.querySelector('.news_content.active');
        const hiddenArticles = activeContent.querySelectorAll('.article.hidden');

        // 如果有隱藏的文章，顯示按鈕
        if (hiddenArticles.length > 0) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    // 初始化頁面：顯示預設的熱門文章內容
    const defaultCategory = document.querySelector('.category[data-target="news_hot"]');
    if (defaultCategory) {
        defaultCategory.click();
    }
});

