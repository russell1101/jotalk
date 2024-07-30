// LOGO標題下滑縮放 
window.addEventListener("scroll", function () {
    var topbar = document.getElementById("#topbar .forum_head");
    if (window.scrollY > 100) {  // 如果滾動超過100px
        topbar.classList.add("collapsed");
    } else {
        topbar.classList.remove("collapsed");
    }
});

// 左側布告欄切換
document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.body_bulletin .categories div');

    categories.forEach(category => {
        category.addEventListener('click', function () {
            // 移除所有類別的 active 類
            categories.forEach(c => c.classList.remove('active'));
            // 為當前點擊的類別添加 active 類
            this.classList.add('active');

            // 根據所選類別更新內容
            const content = document.querySelector('.body_bulletin .bulletin_content p');
            switch (this.className.split(' ')[0]) { // 確保僅抓取類別名稱，避免 active 類影響
                case 'body_guide':
                    content.textContent = '這是新手指南的內容。';
                    break;
                case 'body_special':
                    content.textContent = '這是本月福利的內容。';
                    break;
                case 'body_rank':
                    content.textContent = '這是成就排名的內容。';
                    break;
            }
        });
    });
});


// 熱門標籤影片切換
tagVdoCategories.forEach(tagVdoCategory => {
    tagVdoCategory.addEventListener('click', function () {
        // 移除所有類別的 active 類
        tagVdoCategories.forEach(c => c.classList.remove('active'));
        // 為當前點擊的類別添加 active 類
        this.classList.add('active');

        // 根據所選類別更新內容
        const tagVdoContent = document.querySelector('.body_tagVdo .tagVdo_content .grid');
        switch (this.className.split(' ')[0]) { // 確保僅抓取類別名稱，避免 active 類影響
            case 'body_hotTag':
                tagVdoContent.innerHTML = `
                    <div>標籤1</div>
                    <div>標籤2</div>
                    <div>標籤3</div>
                    <div>標籤4</div>
                    <div>標籤5</div>
                    <div>標籤6</div>
                    <div>標籤7</div>
                    <div>標籤8</div>
                    <div>標籤9</div>
                    <div>標籤10</div>
                    <div>標籤11</div>
                    <div>標籤12</div>
                    <div>標籤13</div>
                    <div>標籤14</div>
                    <div>標籤15</div>
                `;
                break;
            case 'body_hotVdo':
                tagVdoContent.innerHTML = `
                    <div>影片1</div>
                    <div>影片2</div>
                    <div>影片3</div>
                    <div>影片4</div>
                    <div>影片5</div>
                    <div>影片6</div>
                    <div>影片7</div>
                    <div>影片8</div>
                    <div>影片9</div>
                    <div>影片10</div>
                    <div>影片11</div>
                    <div>影片12</div>
                    <div>影片13</div>
                    <div>影片14</div>
                    <div>影片15</div>
                `;
                break;
        }
    });
});