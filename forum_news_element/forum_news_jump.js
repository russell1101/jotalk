// 點擊article 出現視窗
function forum_news() {
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