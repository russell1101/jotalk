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
    const contentDivs = document.querySelectorAll('.body_bulletin .bulletin_content > div');

    categories.forEach(category => {
        category.addEventListener('click', function () {
            // 移除所有類別的 active 類
            categories.forEach(c => c.classList.remove('active'));
            // 移除所有內容的 active 類
            contentDivs.forEach(content => content.classList.remove('active'));
            
            // 為當前點擊的類別添加 active 類
            this.classList.add('active');

            // 顯示相應的內容
            const targetContentClass = this.className.split(' ')[0] + '_content';
            document.querySelector(`.body_bulletin .${targetContentClass}`).classList.add('active');
        });
    });

    // 設置默認顯示的內容
    document.querySelector('.body_guide').click();
});

// 熱門標籤影片切換
document.addEventListener('DOMContentLoaded', () => {
    const tagVdoCategories = document.querySelectorAll('.body_tagVdo .tagVdo_categories div');

    tagVdoCategories.forEach(tagVdoCategory => {
        tagVdoCategory.addEventListener('click', function () {
            // 移除所有類別的 active 類
            tagVdoCategories.forEach(c => c.classList.remove('active'));
            // 為當前點擊的類別添加 active 類
            this.classList.add('active');

            // 根據所選類別更新內容
            const hotTagContent = document.querySelector('.body_tagVdo .body_hotTag_content');
            const hotVdoContent = document.querySelector('.body_tagVdo .body_hotVdo_content');

            if (this.classList.contains('body_hotTag')) {
                hotTagContent.classList.add('active');
                hotVdoContent.classList.remove('active');
            } else if (this.classList.contains('body_hotVdo')) {
                hotTagContent.classList.remove('active');
                hotVdoContent.classList.add('active');
            }
        });
    });
});