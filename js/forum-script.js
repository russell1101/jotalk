// LOGO標題下滑縮放 
document.addEventListener('DOMContentLoaded', function () {
    const forumHead = document.querySelector('.forum_head');

    // 鼠标移入移出事件
    forumHead.addEventListener('mouseenter', function () {
        this.style.width = '50%';  // 鼠标悬停时扩展
        this.style.borderRadius = '99px';  // 转变为长条形
    });

    forumHead.addEventListener('mouseleave', function () {
        this.style.width = '90px';  // 鼠标离开时缩回圆形
        this.style.borderRadius = '99px';
    });

    // 滚动事件
    window.addEventListener("scroll", function () {
        forumHead.classList.add("collapsed");
    });
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

// 右上活動切換
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有类别标签
    const categories = document.querySelectorAll('.news_categories div');
    // 获取所有内容区域
    const contentSections = document.querySelectorAll('.body_news ul');
    // 获取所有的 "更多" 链接
    const moreLinks = document.querySelectorAll('.news_more-link');

    categories.forEach((category) => {
        category.addEventListener('click', () => {
            // 移除所有类别标签的 active 类
            categories.forEach((cat) => cat.classList.remove('active'));
            // 添加 active 类到当前被点击的标签
            category.classList.add('active');

            // 获取当前被点击标签的 data-target 属性
            const target = category.getAttribute('data-target');

            // 隐藏所有内容区域
            contentSections.forEach((section) => {
                section.classList.remove('active');
            });

            // 隐藏所有 "更多" 链接
            moreLinks.forEach((link) => {
                link.classList.remove('active-link');
            });

            // 显示对应的内容区域和链接
            document.querySelector(`.${target}`).classList.add('active');
            document.querySelector(`.${target} ~ .news_more-link`).classList.add('active-link');
        });
    });

    // 默认显示热门活动内容
    document.querySelector('.news_hotEvt').click();
});