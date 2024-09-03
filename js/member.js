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

