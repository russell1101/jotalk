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
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const content = this.parentNode.nextElementSibling;
        if (content.style.display === 'none' || !content.style.display) {
            content.style.display = 'block';
            this.textContent = '-';
        } else {
            content.style.display = 'none';
            this.textContent = '+';
        }
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