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


// 點擊文章出現彈出視窗
let articles = document.querySelectorAll(".article");
let overlay_article = document.getElementById("overlay_article");
let closeButtons = document.querySelectorAll(".closebtn_article");

articles.forEach(article => {
    article.onclick = function () {
        let targetId = this.getAttribute("data-target");
        let targetContent = document.getElementById(targetId);

        overlay_article.style.display = "block"; // 顯示遮罩層
        targetContent.style.display = "flex"; // 顯示對應內容

        setTimeout(() => {
            overlay_article.style.opacity = "1"; // 遮罩層漸變顯示
            targetContent.style.opacity = "1"; // 內容漸變顯示
        }, 10);
    }
});

document.querySelectorAll('#like').forEach(function (likeDiv) {
    likeDiv.addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止事件冒泡到父元素 .article
    });
});

closeButtons.forEach(button => {
    button.onclick = function () {
        let content = this.parentElement;

        overlay_article.style.opacity = "0"; // 遮罩層漸變隱藏
        content.style.opacity = "0"; // 內容漸變隱藏

        setTimeout(() => {
            overlay_article.style.display = "none";
            content.style.display = "none";
        }, 800);
    }
});

overlay_article.onclick = function () {
    closeButtons.forEach(button => button.onclick());
};


let sortHot = document.getElementById('sort-hot')
let sortNewest = document.getElementById('sort-newest')
let sortOldest = document.getElementById('sort-oldest')
let sortButtons = [sortHot, sortNewest, sortOldest];

function resetColor() {
    sortButtons.forEach(reset => {
        reset.style.backgroundColor = 'white';
        reset.style.color = 'black';
    })
}


// 依時間順序排序評論
document.addEventListener('DOMContentLoaded', function () {
    // 監聽熱門留言按鈕的點擊事件
    sortHot.addEventListener('click', function () {
        sortComments('hot');
        resetColor();
        sortHot.style.backgroundColor = '#155569';
        sortHot.style.color = 'white';
    });

    // 監聽由新至舊留言按鈕的點擊事件
    sortNewest.addEventListener('click', function () {
        sortComments('newest');
        resetColor();
        sortNewest.style.backgroundColor = '#155569';
        sortNewest.style.color = 'white';
    });

    // 監聽由舊至新留言按鈕的點擊事件
    sortOldest.addEventListener('click', function () {
        sortComments('oldest');
        resetColor();
        sortOldest.style.backgroundColor = '#155569';
        sortOldest.style.color = 'white';
    });



    // 定義排序函式
    function sortComments(order) {
        let comments = Array.from(document.querySelectorAll('.comment'));
        let commentsContainer = document.getElementById('comments');

        if (order === 'newest') {
            comments.sort((a, b) => new Date(b.getAttribute('data-timestamp')) - new Date(a.getAttribute('data-timestamp')));
        } else if (order === 'oldest') {
            comments.sort((a, b) => new Date(a.getAttribute('data-timestamp')) - new Date(b.getAttribute('data-timestamp')));
        } else if (order === 'hot') {
            comments.sort((a, b) => Math.random() - 0.5);
        }

        // 清空並重新插入排序好的評論
        commentsContainer.innerHTML = '';
        comments.forEach(comment => commentsContainer.appendChild(comment));
    }
});