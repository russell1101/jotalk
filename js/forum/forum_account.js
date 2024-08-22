document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.category');
    const contents = document.querySelectorAll('.Atc_content');
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
            for (let i = 0; i < 8 && i < articlesToShow.length; i++) {
                articlesToShow[i].classList.remove('hidden');
            }

            // 重置載入更多按鈕
            resetLoadMoreButton();
        });
    });

    loadMoreBtn.addEventListener('click', function () {
        const activeContent = document.querySelector('.Atc_content.active');
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
        const activeContent = document.querySelector('.Atc_content.active');
        const hiddenArticles = activeContent.querySelectorAll('.article.hidden');

        // 如果有隱藏的文章，顯示按鈕
        if (hiddenArticles.length > 0) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    // 初始化頁面：顯示預設的熱門文章內容
    const defaultCategory = document.querySelector('.category[data-target="Atc_hot"]');
    if (defaultCategory) {
        defaultCategory.click();
    }
});



// 愛心點擊增加
document.addEventListener('DOMContentLoaded', function () {
    // 獲取所有的 heart 和 bookMark 容器
    const heartContainers = document.querySelectorAll('#heart');
    const bookMarkContainers = document.querySelectorAll('#bookMark');

    // 為每個 heart 容器添加事件處理程序
    heartContainers.forEach(function (heartContainer) {
        const heartImage = heartContainer.querySelector('#heart_img');
        const heartNum = heartContainer.querySelector('#heart_num');

        let count = parseInt(heartNum.textContent, 10);
        let increment = true;

        const originalSrc = "../img/forum/account/like/icon _heart_.svg";
        const redSrc = "../img/forum/account/like/icon _heart_red.svg";

        heartImage.addEventListener('click', function () {
            if (increment) {
                count++;
                heartImage.src = redSrc;
            } else {
                count--;
                heartImage.src = originalSrc;
            }
            heartNum.textContent = count;
            increment = !increment;
        });
    });

    // 為每個 bookMark 容器添加事件處理程序
    bookMarkContainers.forEach(function (bookMarkContainer) {
        const bookmarkImg = bookMarkContainer.querySelector('#bookMark_img');
        const bookmarkNum = bookMarkContainer.querySelector('#bookMark_num');

        let count = parseInt(bookmarkNum.textContent, 10);
        let increment = true;

        const originalSrc = "../img/forum/account/like/icon _bookmark_.svg";
        const redSrc = "../img/forum/account/like/icon _bookmark_red.svg";

        bookmarkImg.addEventListener('click', function () {
            if (increment) {
                count++;
                bookmarkImg.src = redSrc;
            } else {
                count--;
                bookmarkImg.src = originalSrc;
            }
            bookmarkNum.textContent = count;
            increment = !increment;
        });
    });
});



let articles = document.querySelectorAll(".article");
let overlay = document.getElementById("overlay");
let closeButtons = document.querySelectorAll(".closebtn");

articles.forEach(article => {
    article.onclick = function () {
        let targetId = this.getAttribute("data-target");
        let targetContent = document.getElementById(targetId);

        overlay.style.display = "block"; // 顯示遮罩層
        targetContent.style.display = "block"; // 顯示對應內容

        setTimeout(() => {
            overlay.style.opacity = "1"; // 遮罩層漸變顯示
            targetContent.style.opacity = "1"; // 內容漸變顯示
        }, 10);
    }
});

closeButtons.forEach(button => {
    button.onclick = function () {
        let content = this.parentElement;

        overlay.style.opacity = "0"; // 遮罩層漸變隱藏
        content.style.opacity = "0"; // 內容漸變隱藏

        setTimeout(() => {
            overlay.style.display = "none";
            content.style.display = "none";
        }, 800);
    }
});

overlay.onclick = function () {
    closeButtons.forEach(button => button.onclick());
};
