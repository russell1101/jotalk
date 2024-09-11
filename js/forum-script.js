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

// 右上活動切換
document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有類別標籤
    const categories = document.querySelectorAll('.news_categories div');
    // 獲取所有內容區域
    const contentSections = document.querySelectorAll('.news_content, .limitEvt_content, .normalEvt_content');
    // 獲取 "更多" 按鈕的父容器
    const moreLinkContainer = document.querySelector('.news_more-link');

    // 處理類別標籤點擊事件
    categories.forEach((category) => {
        category.addEventListener('click', () => {
            // 移除所有類別標籤的 active 類
            categories.forEach((cat) => cat.classList.remove('active'));
            // 添加 active 類到當前被點擊的標籤
            category.classList.add('active');

            // 獲取當前被點擊標籤的 data-target 屬性
            const target = category.getAttribute('data-target');

            // 隱藏所有內容區域
            contentSections.forEach((section) => section.classList.remove('active'));

            // 顯示對應的內容區域
            const activeSection = document.querySelector(`.${target}`);
            activeSection.classList.add('active');

            // 顯示 "更多" 按鈕
            moreLinkContainer.classList.add('active-link');
        });
    });

    // 預設顯示熱門活動內容
    document.querySelector('.news_hotEvt').click();
});



// 右中文章欄切換
document.addEventListener('DOMContentLoaded', () => {
    // 取得所有類別標籤按鈕
    const categoryButtons = document.querySelectorAll('.atc_categories div');
    // 取得所有內容區域
    const contentSections = document.querySelectorAll('.body_atc > div');

    // 預設隱藏 niceAtc_content 和 normalAtc_content，顯示 hotAtc_content
    contentSections.forEach(section => {
        if (!section.classList.contains('hotAtc_content')) {
            section.classList.remove('active');
        } else {
            section.classList.add('active');
        }
    });

    // 預設將熱門文章的按鈕設為 active
    categoryButtons.forEach(button => {
        if (button.getAttribute('data-target') === 'hotAtc_content') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按鈕的 active 類別
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 隱藏所有內容區域
            contentSections.forEach(section => section.classList.remove('active'));

            // 為點選的按鈕添加 active 類別
            button.classList.add('active');
            // 顯示相對應的內容區域
            const targetClass = button.getAttribute('data-target');
            const targetSection = document.querySelector(`.${targetClass}`);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});




// 右下教學欄切換
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有类别标签
    const categories = document.querySelectorAll('.teach_categories div');
    // 获取所有内容区域
    const contentSections = document.querySelectorAll('.body_teach ul');
    // 获取唯一的 "更多" 链接按钮
    const moreLink = document.querySelector('.teachs_more-link');

    // 为每个类别标签添加点击事件
    categories.forEach((category) => {
        category.addEventListener('click', () => {
            // 移除所有类别标签和内容区域的 active 类
            categories.forEach(cat => cat.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // 为点击的标签添加 active 类
            category.classList.add('active');

            // 获取目标内容区域并显示
            const targetContentClass = category.getAttribute('data-target');
            const targetContent = document.querySelector(`.${targetContentClass}`);

            if (targetContent) {
                targetContent.classList.add('active');
            }

            // "更多" 链接不再随类别切换，始终保留
            moreLink.classList.add('active-link');
        });
    });
});


// 點擊圖片彈出視窗
document.addEventListener("DOMContentLoaded", function () {
    const overlay_teach = document.getElementById("image-overlay");
    const overlayImage = document.getElementById("overlay-image");

    // 限定查找範圍在 body_teach 區域內
    const bodyTeach = document.querySelector(".body_teach");
    const items = bodyTeach.querySelectorAll("li[data-large]");

    // 為每個 li 添加點擊事件處理器
    items.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();  // 防止 a 標籤的預設行為
            const largeImageSrc = item.getAttribute("data-large");  // 取得 data-large 屬性的值
            overlayImage.src = largeImageSrc;  // 設置彈出圖片的 src
            overlay_teach.style.display = "block";   // 顯示遮罩
        });
    });

    // 點擊遮罩時隱藏遮罩和圖片
    overlay_teach.addEventListener("click", function () {
        overlay_teach.style.display = "none";
    });
});
