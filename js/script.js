// 首頁區
// topbar
window.addEventListener("scroll", function () {
    var topbar = document.getElementById("topbar");
    if (window.scrollY > 100) {  // 如果页面滚动超过100px
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
// about 泡泡特效
document.addEventListener("DOMContentLoaded", function () {
    let pops = document.querySelectorAll(".pop");

    pops.forEach(pop => {
        let delay = Math.random() * 2; // 随机延迟 0-2 秒
        let duration = 2 + Math.random(); // 随机持续时间 1-2 秒
        let interval = Math.random() * 4 + 1; // 随机重复间隔 1-5 秒

        pop.style.animationDelay = `${delay}s`;
        pop.style.animationDuration = `${duration}s`;

        setInterval(() => {
            pop.classList.remove('bubble-animate');
            setTimeout(() => {
                pop.classList.add('bubble-animate');
            }, delay * 1000);
        }, interval * 1000);
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


// 會員登入頁
// 取得按鈕、彈出視窗和遮罩層的元素
let loginBtn = document.getElementById("loginBtn");
let myWindow = document.getElementById("loginWindow");
let overlay = document.getElementById("overlay");
let close = document.getElementById("closebtn");

// 當使用者點擊登入按鈕時，顯示彈出視窗和遮罩層
loginBtn.onclick = function () {
    myWindow.style.display = "block";
    overlay.style.display = "block";
}

// 當使用者點擊關閉按鈕時，隱藏彈出視窗和遮罩層
close.onclick = function () {
    myWindow.style.display = "none";
    overlay.style.display = "none";
}

// 當使用者點擊遮罩層時，也隱藏彈出視窗和遮罩層
overlay.onclick = function () {
    myWindow.style.display = "none";
    overlay.style.display = "none";
}


// 表單寫入localstorage
let btn_login = document.getElementById('btn_login');
btn_login.addEventListener('click', function () {
    let
});