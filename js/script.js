// topbar
window.addEventListener("scroll", function () {
    var topbar = document.getElementById("topbar");
    if (window.scrollY > 100) {
        topbar.classList.add("collapsed");
    } else {
        topbar.classList.remove("collapsed");
    }
});

// 會員頁面
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.store_month').forEach(storeMonth => {
        const content = storeMonth.querySelector('.record-content');
        const toggleBtn = storeMonth.querySelector('.toggle-btn');

        if (!content.classList.contains('this')) {
            storeMonth.style.backgroundColor = '#585858';
        }
    });

    // 为每个 .record-header 添加点击事件
    document.querySelectorAll('.record-header').forEach(header => {
        header.addEventListener('click', function () {
            const storeMonth = this.parentElement;
            const content = this.nextElementSibling;
            const toggleBtn = this.querySelector('.toggle-btn');

            // 切换展开和收合的状态
            const isExpanded = content.classList.toggle('this');

            // 根据状态设置按钮符号和背景颜色
            if (isExpanded) {
                toggleBtn.textContent = '–';
                storeMonth.style.backgroundColor = '#58585809';
            } else {
                toggleBtn.textContent = '+';
                storeMonth.style.backgroundColor = '#585858';
            }
        });
    });
});