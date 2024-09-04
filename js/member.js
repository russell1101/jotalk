document.addEventListener('DOMContentLoaded', function () {
    // 處理 .store_month 區塊的展開與收合邏輯
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

    // 右側分頁切換
    const buttons = document.querySelectorAll('.nav-btn ul');
    const contentDivs = document.querySelectorAll('#member-right > div');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            buttons.forEach(btn => {
                btn.style.backgroundColor = '';
                btn.style.padding = '';
                btn.style.borderRadius = '';
                btn.querySelector('a').style.color = '';
                btn.querySelector('a').style.pointerEvents = '';
            });

            button.style.backgroundColor = '#155569';
            button.style.color = 'white';
            button.style.padding = '5px 10px';
            button.style.borderRadius = '10px';
            button.querySelector('a').style.color = 'white';
            button.querySelector('a').style.pointerEvents = 'none';

            contentDivs.forEach(div => div.style.display = 'none');

            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).style.display = 'block';

            if (targetId === 'mb-collect') {
                document.querySelector('.nav-mbCollect').style.display = 'flex';
                document.querySelector('.nav-mb-bar').click();
            } else {
                document.querySelector('.nav-mbCollect').style.display = 'none';
            }
        });
    });

    // 預設顯示第一個按鈕對應的內容區域
    buttons[0].click();

    const collectButtons = document.querySelectorAll('.nav-mbCollect a');
    const collectDivs = document.querySelectorAll('.collect-bar, .collect-article, .collect-member');

    collectButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            collectButtons.forEach(btn => {
                btn.parentElement.classList.remove('active');
            });

            collectDivs.forEach(div => div.style.display = 'none');

            button.parentElement.classList.add('active');
            const targetClass = button.getAttribute('data-target');
            document.querySelector(`.${targetClass}`).style.display = 'block';
        });
    });

    document.querySelector('.nav-mb-bar').click();
});












