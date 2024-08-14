// 左邊標籤切換
document.addEventListener("DOMContentLoaded", function () {
    const tagCategories = document.querySelectorAll('.tag_category');
    const tagTitles = document.querySelectorAll('.tag_title');
    const tagItems = document.querySelectorAll('.tag_item');

    // 設置預設顯示的標籤 (假設第一個標籤是預設)
    const defaultCategory = tagCategories[0];
    const defaultItems = defaultCategory.querySelector('.tag_items');

    defaultCategory.classList.add('selected');
    defaultItems.classList.remove('hidden');

    // 大標籤點擊事件
    tagTitles.forEach(title => {
        title.addEventListener('click', function () {
            // 清除所有標籤和小標籤的外框線
            tagCategories.forEach(category => {
                category.classList.remove('selected');
            });

            // 展開或隱藏對應的小標籤
            tagCategories.forEach(category => {
                const tagItems = category.querySelector('.tag_items');
                if (category.contains(this)) {
                    tagItems.classList.toggle('hidden');
                    category.classList.add('selected'); // 將外框線加到大標籤+小標籤
                } else {
                    tagItems.classList.add('hidden');
                }
            });
        });
    });

    // 小標籤點擊事件
    tagItems.forEach(item => {
        item.addEventListener('click', function () {
            // 移除其他小標籤的選中狀態
            tagItems.forEach(i => i.classList.remove('active'));

            // 為當前選中的小標籤和對應的大標籤加上選中狀態
            this.classList.add('active');
        });
    });
});

// 右上類別切換
