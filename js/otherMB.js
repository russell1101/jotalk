
    document.addEventListener('DOMContentLoaded', function () {
        // 預設顯示 '他的文章'
        document.querySelectorAll('.nav-btn ul').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                // 移除所有按鈕的 active 樣式
                document.querySelectorAll('.nav-btn ul').forEach(btn => btn.classList.remove('active'));
                // 隱藏所有右側的內容
                document.querySelectorAll('#omb-right > div').forEach(section => section.style.display = 'none');
                // 添加 active 樣式到被點擊的按鈕
                this.classList.add('active');
                const target = this.getAttribute('data-target');
                document.querySelector(`#${target}`).style.display = 'block';
            });
        });

        // 預設顯示 "他的收藏" 的 "collect-bar"
        document.querySelectorAll('.nav-ombCollect ul').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelectorAll('.nav-ombCollect ul').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.collect-content > div').forEach(section => section.style.display = 'none');
                this.classList.add('active');
                const target = this.getAttribute('data-target');
                document.querySelector(`.${target}`).style.display = 'block';
            });
        });

        document.querySelector('.nav-article').click();
        document.querySelector('.nav-omb-article').click();

        // 追蹤按鈕邏輯
        let isFollowing = false; // 判斷是否已追蹤
        const navFollow = document.querySelector('.nav-follow p');
        const followIcon = document.querySelector('.nav-follow img');

        document.querySelector('.nav-follow').addEventListener('click', function (event) {
            event.preventDefault(); // 防止刷新或其他行為
            // 顯示通知，不影響右側內容
            if (!isFollowing) {
                alert('已追蹤該會員');
                navFollow.textContent = '取消追蹤';
                followIcon.style.display = 'none'; // 隱藏圖片
            } else {
                alert('已取消追蹤該會員');
                navFollow.textContent = '追蹤他';
                followIcon.style.display = 'inline'; // 顯示圖片
            }
            isFollowing = !isFollowing; // 切換追蹤狀態
        });

        // 確保在切換內容時不會刷新
        const rightContentSections = document.querySelectorAll('#omb-right > div');
        rightContentSections.forEach(section => {
            section.style.display = 'none'; // 初始隱藏
        });
        document.querySelector('#omb-article').style.display = 'block'; // 顯示預設內容
    });







    // // 點擊文章出現彈出視窗
    // const articles = document.querySelectorAll(".article");
    // const overlay = document.getElementById("overlay");
    // const closeButtons = document.querySelectorAll(".closebtn");

    // articles.forEach(article => {
    //     article.addEventListener('click', function () {
    //         const targetId = this.getAttribute("data-target");
    //         const targetContent = document.getElementById(targetId);

    //         overlay.style.display = "block";
    //         targetContent.classList.remove('hidden');
    //         targetContent.style.display = "flex";

    //         setTimeout(() => {
    //             overlay.style.opacity = "1";
    //             targetContent.style.opacity = "1";
    //         }, 10);
    //     });
    // });

    // closeButtons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         const content = this.closest('.content');

    //         overlay.style.opacity = "0";
    //         content.style.opacity = "0";

    //         setTimeout(() => {
    //             overlay.style.display = "none";
    //             content.style.display = "none";
    //             content.classList.add('hidden');
    //         }, 300);
    //     });
    // });

    // // 點擊遮罩層時，關閉所有彈出內容
    // overlay.addEventListener('click', function () {
    //     closeButtons.forEach(button => {
    //         button.click(); // 觸發關閉按鈕的點擊事件
    //     });
    // });


    // // 阻止點擊收藏區域彈出視窗
    // document.querySelectorAll('#like').forEach(likeDiv => {
    //     likeDiv.addEventListener('click', function (event) {
    //         event.stopPropagation();
    //     });
    // });




    // // 這個函數用來重置所有按鈕的顏色
    // function resetColor(buttons) {
    //     buttons.forEach(button => {
    //         button.style.backgroundColor = 'white';
    //         button.style.color = 'black';
    //     });
    // }

    // // 這個函數用來根據時間戳進行排序
    // function sortComments(commentsContainer, order) {
    //     let comments = Array.from(commentsContainer.querySelectorAll('.comment'));
    //     let sortedComments;

    //     if (order === 'newest') {
    //         // 按照最新到最舊排序
    //         sortedComments = comments.sort((a, b) => new Date(b.dataset.timestamp) - new Date(a.dataset.timestamp));
    //     } else if (order === 'oldest') {
    //         // 按照最舊到最新排序
    //         sortedComments = comments.sort((a, b) => new Date(a.dataset.timestamp) - new Date(b.dataset.timestamp));
    //     } else if (order === 'hot') {
    //         // 按照最多愛心數排序
    //         sortedComments = comments.sort((a, b) => parseInt(b.querySelector('#heart_num').textContent) - parseInt(a.querySelector('#heart_num').textContent));
    //     } else {
    //         // 預設排序，按原始順序
    //         sortedComments = comments;
    //     }

    //     // 清空容器，並根據排序後的順序重新附加留言
    //     commentsContainer.innerHTML = '';
    //     sortedComments.forEach(comment => commentsContainer.appendChild(comment));
    // }

    // // 為每個留言區域中的每一個排序按鈕添加點擊事件
    // document.querySelectorAll('.comment-section').forEach(section => {
    //     let sortButtons = section.querySelectorAll('.sort-button');

    //     // 將 commentsContainer 設定為正確的元素
    //     let commentsContainer = section.querySelector('[id^="comments"]');

    //     // 檢查 commentsContainer 是否存在
    //     if (!commentsContainer) {
    //         console.error("Comments container not found!");
    //         return;
    //     }

    //     sortButtons.forEach(button => {
    //         button.addEventListener('click', function () {
    //             resetColor(sortButtons); // 重置所有按鈕的顏色
    //             button.style.backgroundColor = '#155569'; // 改變當前按鈕的背景顏色
    //             button.style.color = 'white'; // 改變當前按鈕的字體顏色

    //             // 根據按鈕的類別進行相應的排序
    //             if (button.classList.contains('sort-newest')) {
    //                 sortComments(commentsContainer, 'newest');
    //             } else if (button.classList.contains('sort-oldest')) {
    //                 sortComments(commentsContainer, 'oldest');
    //             } else if (button.classList.contains('sort-hot')) {
    //                 sortComments(commentsContainer, 'hot');
    //             } else {
    //                 sortComments(commentsContainer); // 預設排序
    //             }
    //         });
    //     });
    // });
