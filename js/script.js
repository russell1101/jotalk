// 首頁區
// topbar
window.addEventListener("scroll", function () {
    var topbar = document.getElementById("topbar");
    if (window.scrollY > 100) {
        topbar.classList.add("collapsed");
    } else {
        topbar.classList.remove("collapsed");
    }
});


// 滾動卡片 懸浮停止
document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.addEventListener('mouseover', () => {
            column.style.animationPlayState = 'paused';
        });
        column.addEventListener('mouseout', () => {
            column.style.animationPlayState = 'running';
        });
    });
});

// 會員頁面
document.addEventListener('DOMContentLoaded', function () {
    // 初始化时设置默认收合的 .store_month 背景色为 #585858
    document.querySelectorAll('.store_month').forEach(storeMonth => {
        const content = storeMonth.querySelector('.record-content');
        const toggleBtn = storeMonth.querySelector('.toggle-btn');

        // 如果当前 .record-content 没有展开，则设置背景色为深灰色
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
                toggleBtn.textContent = '-';
                storeMonth.style.backgroundColor = '#58585827';
            } else {
                toggleBtn.textContent = '+';
                storeMonth.style.backgroundColor = '#585858';
            }
        });
    });
});