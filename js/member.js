document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.store_month').forEach(storeMonth => {
        const content = storeMonth.querySelector('.record-content');
        const toggleBtn = storeMonth.querySelector('.toggle-btn');
        const spans = storeMonth.querySelectorAll('.record-header span');

        if (!content.classList.contains('this')) {
            storeMonth.style.backgroundColor = '#0f566dbe';
            content.style.maxHeight = '0';
            spans.forEach(span => {
                span.style.color = '#ffffff';
            });
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            spans.forEach(span => {
                span.style.color = '#2c2c2c';
            });
        }
    });

    // record-header 添加點擊事件
    document.querySelectorAll('.record-header').forEach(header => {
        header.addEventListener('click', function () {
            const storeMonth = this.parentElement;
            const content = this.nextElementSibling;
            const toggleBtn = this.querySelector('.toggle-btn');
            const spans = this.querySelectorAll('span');
            const isExpanded = content.classList.toggle('this');

            if (isExpanded) {
                toggleBtn.textContent = '–';
                storeMonth.style.backgroundColor = '#a2bbc3af';
                content.style.maxHeight = content.scrollHeight + 'px';
                spans.forEach(span => {
                    span.style.color = '#2c2c2c';
                });
            } else {
                toggleBtn.textContent = '+';
                storeMonth.style.backgroundColor = '#0f566dbe';
                content.style.maxHeight = '0';
                spans.forEach(span => {
                    span.style.color = '#ffffff';
                });
            }
        });
    });
});

// 右側分頁切換
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-btn ul');
    const contentDivs = document.querySelectorAll('#member-right > div');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            // 移除所有按鈕的active class
            buttons.forEach(btn => {
                btn.style.backgroundColor = '';
                btn.style.borderRadius = '';
            });

            // 將點擊的按鈕設置為黃色背景和圓角
            button.style.backgroundColor = '#155569';
            button.style.fontColor = '#ffffff';
            button.style.borderRadius = '5px';

            // 隱藏所有的內容區域
            contentDivs.forEach(div => div.style.display = 'none');

            // 顯示與點擊按鈕對應的內容區域
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // 預設顯示第一個按鈕對應的內容區域
    buttons[0].click();
});









