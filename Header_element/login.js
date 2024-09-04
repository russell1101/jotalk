
function login() {
    // 會員登入頁
    // 取得按鈕、彈出視窗和遮罩層的元素
    const loginBtn_el = document.getElementById("loginBtn_el");
    const myWindow = document.getElementById("loginWindow_el");
    const account_overlay_el = document.getElementById("account_overlay_el");
    const close = document.getElementById("closebtn_el");
    const logoutBtn_el = document.getElementById("logoutBtn_el");

    // 登出按鈕
    logoutBtn_el.onclick = function () {
        alert('登出成功');
        window.localStorage.removeItem('isLoggedIn');
        updateLoginStatus();
    }

    // 當使用者點擊登入按鈕時，顯示彈出視窗和遮罩層，並添加漸變效果
    loginBtn_el.onclick = function () {
        account_overlay_el.style.display = "block"; // 顯示遮罩層
        myWindow.style.display = "block"; // 顯示彈出視窗
        setTimeout(() => { // 使用setTimeout來觸發漸變效果
            account_overlay_el.style.opacity = "1"; // 遮罩層漸變顯示
            myWindow.style.opacity = "1"; // 彈出視窗漸變顯示
        }, 10); // 延遲以確保display生效
    };

    // 當使用者點擊關閉按鈕時，隱藏彈出視窗和遮罩層，並添加漸變效果
    close.onclick = function () {
        account_overlay_el.style.opacity = "0"; // 遮罩層漸變隱藏
        myWindow.style.opacity = "0"; // 彈出視窗漸變隱藏
        setTimeout(() => { // 使用setTimeout來等待漸變完成後隱藏
            account_overlay_el.style.display = "none"; // 隱藏遮罩層
            myWindow.style.display = "none"; // 隱藏彈出視窗
        }, 350); // 漸變時間與transition一致
    };

    // 當使用者點擊遮罩層時，也隱藏彈出視窗和遮罩層，並添加漸變效果
    account_overlay_el.onclick = function () {
        close.onclick(); // 調用close的onclick事件
    };

    // 表單寫入localstorage
    const btn1 = document.getElementById('btn_login');
    btn1.addEventListener('click', function () {
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        // 寫入到localStorage
        window.localStorage.setItem('email', email.value);
        window.localStorage.setItem('password', password.value);
        window.localStorage.setItem('isLoggedIn', 'true');  // 設置登入狀態為已登入
        if (email.value === '') {
            alert('訪客登入');
        } else {
            alert(email.value + '登入成功');
        }
        window.location.href = './member.html';
    });

    const btn2 = document.getElementById('btn_register');
    btn2.addEventListener('click', function () {
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        // 寫入到localStorage
        window.localStorage.setItem('email', email.value);
        window.localStorage.setItem('password', password.value);
        window.localStorage.setItem('isLoggedIn', 'true');  // 設置登入狀態為已登入
        if (email.value === '') {
            alert('未登錄用户');
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
                window.localStorage.setItem('isLoggedIn', 'true');  // 設置登入狀態為已登入
                window.location.href = './member.html';
            });
        }
    });

    // 確認會員登入狀態，並更新按鈕
    function updateLoginStatus() {
        const isLoggedIn = window.localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            loginBtn_el.textContent = '會員登出';
            loginBtn_el.style.display = 'none';
            logoutBtn_el.style.display = 'block';
        } else {
            loginBtn_el.textContent = '會員登入';
            loginBtn_el.style.display = 'block';
            logoutBtn_el.style.display = 'none';
        }
    }
    // 當頁面加載時，更新登入狀態
    updateLoginStatus();

    // 檢查是否登入
    document.querySelector('a[href="./member.html"]').addEventListener('click', function (event) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {
            // 已登录，允许导航
            return true;
        } else {
            // 未登录，阻止导航并显示提示
            event.preventDefault();
            alert('尚未登入');
            account_overlay_el.style.display = "block"; // 顯示遮罩層
            myWindow.style.display = "block"; // 顯示彈出視窗
            setTimeout(() => { // 使用setTimeout來觸發漸變效果
                account_overlay_el.style.opacity = "1"; // 遮罩層漸變顯示
                myWindow.style.opacity = "1"; // 彈出視窗漸變顯示
            }, 10); // 延遲以確保display生效
        }
    });
}



