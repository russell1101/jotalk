
function post() {
    // 點擊文章出現彈出視窗
    const articles = document.querySelectorAll(".article");
    const overlay = document.getElementById("overlay");
    const closeButtons = document.querySelectorAll(".closebtn");

    const bodyAtc = document.querySelector('.body_atc');

    // 只在 body_atc 區域內禁用 <a> 的預設跳轉
    if (bodyAtc) {
        bodyAtc.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                event.preventDefault(); // 阻止 <a> 的跳轉行為
            }
        });
    }

    articles.forEach(article => {
        article.addEventListener('click', function () {
            const target = article.getAttribute('data-target'); // 獲取 data-target 值
            const Content = document.getElementById(target); // 找到對應的 content

            overlay.style.display = "block";
            Content.classList.remove('hidden');
            Content.style.display = "flex";

            setTimeout(() => {
                overlay.style.opacity = "1";
                Content.style.opacity = "1";
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
            button.style.backgroundColor = '#F5F5F5';
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