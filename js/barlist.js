document.addEventListener("DOMContentLoaded", function() {
    const tagCategories = document.querySelectorAll('.tag_category');

    tagCategories.forEach(category => {
        category.querySelector('.tag_title').addEventListener('click', function() {
            // 隱藏其他所有標籤的 tag_items
            tagCategories.forEach(cat => {
                if (cat !== category) {
                    cat.querySelector('.tag_items').classList.add('hidden');
                }
            });

            // 切換當前選中的 tag_items 的顯示狀態
            const tagItems = category.querySelector('.tag_items');
            tagItems.classList.toggle('hidden');
        });
    });
});
