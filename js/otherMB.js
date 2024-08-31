document.addEventListener('DOMContentLoaded', function() {
    // 預設顯示 '他的文章'
    document.querySelectorAll('.nav-btn ul').forEach(button => {
        button.addEventListener('click', function(e) {
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
        button.addEventListener('click', function(e) {
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


