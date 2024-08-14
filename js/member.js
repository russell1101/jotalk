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
let btn_login=document.getElementById('btn_login');
btn_login.addEventListener('click',function(){
    let 
});