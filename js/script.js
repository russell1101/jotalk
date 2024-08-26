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

// smoove特效
$(document).ready(function() {
    $('.smoove').smoove({
        offset: '40%'
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


// 當使用者點擊登入按鈕時，顯示彈出視窗和遮罩層，並添加漸變效果
loginBtn.onclick = function () {
    overlay.style.display = "block"; // 顯示遮罩層
    myWindow.style.display = "block"; // 顯示彈出視窗
    setTimeout(() => { // 使用setTimeout來觸發漸變效果
        overlay.style.opacity = "1"; // 遮罩層漸變顯示
        myWindow.style.opacity = "1"; // 彈出視窗漸變顯示
    }, 10); // 延遲以確保display生效
};

// 當使用者點擊關閉按鈕時，隱藏彈出視窗和遮罩層，並添加漸變效果
close.onclick = function () {
    overlay.style.opacity = "0"; // 遮罩層漸變隱藏
    myWindow.style.opacity = "0"; // 彈出視窗漸變隱藏
    setTimeout(() => { // 使用setTimeout來等待漸變完成後隱藏
        overlay.style.display = "none"; // 隱藏遮罩層
        myWindow.style.display = "none"; // 隱藏彈出視窗
    }, 800); // 漸變時間與transition一致
};

// 當使用者點擊遮罩層時，也隱藏彈出視窗和遮罩層，並添加漸變效果
overlay.onclick = function () {
    close.onclick(); // 調用close的onclick事件
};


// 表單寫入localstorage
// 登入 button要設定跳轉指令
let btn1 = document.getElementById('btn_login');
btn1.addEventListener('click', function () {
    let uid = document.getElementById('email');
    // 寫入到localStorage
    window.localStorage.setItem('email', email.value);
    // 取得密碼
    let upw = document.getElementById('password');
    // 寫入到localStorage
    window.localStorage.setItem('password', password.value);
    if (email.value === '') {
        alert('未登錄用户');
    } else {
        alert(email.value + '登入成功');
    }
    window.location.href = './member.html';
});

let btn2 = document.getElementById('btn_register');
btn2.addEventListener('click', function () {
    let uid = document.getElementById('email');
    // 寫入到localStorage
    window.localStorage.setItem('email', email.value);
    // 取得密碼
    let upw = document.getElementById('password');
    // 寫入到localStorage
    window.localStorage.setItem('password', password.value);
    if (email.value == '') {
        alert(未登錄用户)
    } else {
        alert(email.value + '登入成功');
    }
    window.location.href = './member.html';
});



// 快速登入的提示
const ids = ['fb', 'google', 'line'];

ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', function () {

            alert(id + '登入成功');
            window.location.href = './member.html';
        });
    }
});