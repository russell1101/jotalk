function windowout() {
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




    // 點擊article 出現視窗
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
        article.addEventListener('click', function () {
            const overlay = document.getElementById('overlay');
            const modalWindow = document.getElementById('window');

            overlay.style.display = 'block';
            modalWindow.style.display = 'block';

            setTimeout(() => {
                overlay.classList.add('show');
                modalWindow.classList.add('show');
            }, 10);
        });
    });

    document.getElementById('closeBtn').addEventListener('click', closeWindow);
    document.getElementById('overlay').addEventListener('click', closeWindow);

    function closeWindow() {
        const overlay = document.getElementById('overlay');
        const popWindow = document.getElementById('window');

        // 开始淡出过渡效果
        overlay.classList.remove('show');
        popWindow.classList.remove('show');

        // 延迟将 display 设置为 none，等待过渡效果完成
        setTimeout(() => {
            overlay.style.display = 'none';
            popWindow.style.display = 'none';
        }, 350); // 350 毫秒与 CSS 中的 transition 持续时间一致
    }
}