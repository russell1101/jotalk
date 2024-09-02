function windowout() {
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

    loadMoreBtn?.addEventListener('click', function () {
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



    // // 更新顯示和 localStorage 的功能
    // function updateDisplayAndStorage(id, count, src) {
    //     const container = document.querySelectorAll(`#${id}`);
    //     container.forEach(function (element) {
    //         const image = element.querySelector(`#${id}_img`);
    //         const num = element.querySelector(`#${id}_num`);

    //         // 更新圖片來源和數字
    //         image.src = src;
    //         num.textContent = count;
    //     });

    //     // 儲存到 localStorage
    //     localStorage.setItem(id, count);
    // }

    // // 初始化 heart 容器
    // const heartContainers = document.querySelectorAll('#heart');
    // heartContainers.forEach(function (heartContainer) {
    //     const heartImage = heartContainer.querySelector('#heart_img');
    //     const heartNum = heartContainer.querySelector('#heart_num');

    //     let count = parseInt(heartNum.textContent, 10);
    //     let increment = true;

    //     const originalSrc = "../img/forum/account/like/icon _heart_.svg";
    //     const redSrc = "../img/forum/account/like/icon _heart_red.svg";

    //     // 檢查是否有儲存在 localStorage 的數字
    //     const savedHeartCount = localStorage.getItem('heart');
    //     if (savedHeartCount) {
    //         count = parseInt(savedHeartCount, 10);
    //         heartNum.textContent = count;
    //     }

    //     heartImage.addEventListener('click', function () {
    //         if (increment) {
    //             count++;
    //             heartImage.src = redSrc;
    //         } else {
    //             count--;
    //             heartImage.src = originalSrc;
    //         }
    //         updateDisplayAndStorage('heart', count, heartImage.src);
    //         increment = !increment;
    //     });
    // });

    // // 初始化 bookMark 容器
    // const bookMarkContainers = document.querySelectorAll('#bookMark');
    // bookMarkContainers.forEach(function (bookMarkContainer) {
    //     const bookMarkImage = bookMarkContainer.querySelector('#bookMark_img');
    //     const bookMarkNum = bookMarkContainer.querySelector('#bookMark_num');

    //     let count = parseInt(bookMarkNum.textContent, 10);
    //     let increment = true;

    //     const originalSrc = "../img/forum/account/like/icon _bookmark_.svg";
    //     const filledSrc = "../img/forum/account/like/icon _bookmark_filled.svg"; // 假設有一個填滿的書籤圖標

    //     // 檢查是否有儲存在 localStorage 的數字
    //     const savedBookMarkCount = localStorage.getItem('bookMark');
    //     if (savedBookMarkCount) {
    //         count = parseInt(savedBookMarkCount, 10);
    //         bookMarkNum.textContent = count;
    //     }

    //     bookMarkImage.addEventListener('click', function () {
    //         if (increment) {
    //             count++;
    //             bookMarkImage.src = filledSrc;
    //         } else {
    //             count--;
    //             bookMarkImage.src = originalSrc;
    //         }
    //         updateDisplayAndStorage('bookMark', count, bookMarkImage.src);
    //         increment = !increment;
    //     });
    // });



    // 點擊文章出現彈出視窗
    const articles = document.querySelectorAll(".article");
    const overlay = document.getElementById("overlay");
    const closeButtons = document.querySelectorAll(".closebtn");

    articles.forEach(article => {
        article.addEventListener('click', function () {
            const targetId = this.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);

            overlay.style.display = "block";
            targetContent.classList.remove('hidden');
            targetContent.style.display = "flex";

            setTimeout(() => {
                overlay.style.opacity = "1";
                targetContent.style.opacity = "1";
            }, 10);
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.closest('.content');

            overlay.style.opacity = "0";
            content.style.opacity = "0";

            setTimeout(() => {
                overlay.style.display = "none";
                content.style.display = "none";
                content.classList.add('hidden');
            }, 300);
        });
    });

    // 點擊遮罩層時，關閉所有彈出內容
    overlay.addEventListener('click', function () {
        closeButtons.forEach(button => {
            button.click(); // 觸發關閉按鈕的點擊事件
        });
    });


    // 阻止點擊收藏區域彈出視窗
    document.querySelectorAll('#like').forEach(likeDiv => {
        likeDiv.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });




    // 這個函數用來重置所有按鈕的顏色
    function resetColor(buttons) {
        buttons.forEach(button => {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
        });
    }

    // 這個函數用來根據時間戳進行排序
    function sortComments(commentsContainer, order) {
        let comments = Array.from(commentsContainer.querySelectorAll('.comment'));
        let sortedComments;

        if (order === 'newest') {
            // 按照最新到最舊排序
            sortedComments = comments.sort((a, b) => new Date(b.dataset.timestamp) - new Date(a.dataset.timestamp));
        } else if (order === 'oldest') {
            // 按照最舊到最新排序
            sortedComments = comments.sort((a, b) => new Date(a.dataset.timestamp) - new Date(b.dataset.timestamp));
        } else if (order === 'hot') {
            // 按照最多愛心數排序
            sortedComments = comments.sort((a, b) => parseInt(b.querySelector('#heart_num').textContent) - parseInt(a.querySelector('#heart_num').textContent));
        } else {
            // 預設排序，按原始順序
            sortedComments = comments;
        }

        // 清空容器，並根據排序後的順序重新附加留言
        commentsContainer.innerHTML = '';
        sortedComments.forEach(comment => commentsContainer.appendChild(comment));
    }

    // 為每個留言區域中的每一個排序按鈕添加點擊事件
    document.querySelectorAll('.comment-section').forEach(section => {
        let sortButtons = section.querySelectorAll('.sort-button');

        // 將 commentsContainer 設定為正確的元素
        let commentsContainer = section.querySelector('[id^="comments"]');

        // 檢查 commentsContainer 是否存在
        if (!commentsContainer) {
            console.error("Comments container not found!");
            return;
        }

        sortButtons.forEach(button => {
            button.addEventListener('click', function () {
                resetColor(sortButtons); // 重置所有按鈕的顏色
                button.style.backgroundColor = '#155569'; // 改變當前按鈕的背景顏色
                button.style.color = 'white'; // 改變當前按鈕的字體顏色

                // 根據按鈕的類別進行相應的排序
                if (button.classList.contains('sort-newest')) {
                    sortComments(commentsContainer, 'newest');
                } else if (button.classList.contains('sort-oldest')) {
                    sortComments(commentsContainer, 'oldest');
                } else if (button.classList.contains('sort-hot')) {
                    sortComments(commentsContainer, 'hot');
                } else {
                    sortComments(commentsContainer); // 預設排序
                }
            });
        });
    });
}
