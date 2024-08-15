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

// 左邊地區隨右邊標籤切換
document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.barlist_filters .filter_item');
    const regionItems = document.querySelectorAll('.tag_items .tag_item');
    const allRegionItems = document.querySelectorAll('.tag_item');

    filters.forEach(filter => {
        filter.addEventListener('click', function () {
            const region = this.getAttribute('data-filter');

            // 移除所有篩選器的活動狀態
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            // 更新地區標籤顯示
            allRegionItems.forEach(item => {
                if (item.classList.contains(region) || region === 'all') {
                    item.style.display = 'block'; // 顯示符合篩選的地區標籤
                } else if (item.classList.contains('north') || item.classList.contains('central') || item.classList.contains('south')) {
                    item.style.display = 'none'; // 隱藏不符合篩選的地區標籤
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tagsBox = document.querySelector('.tags_box');
    const tagItems = document.querySelectorAll('.tag_item');
    const listItems = document.querySelectorAll('.list_item');
    const filterItems = document.querySelectorAll('.filter_item');

    // 處理標籤的選擇與移除
    tagItems.forEach(item => {
        item.addEventListener('click', () => {
            const tagText = item.textContent.trim();
            // 檢查標籤是否已經在 tags_box 中
            if (!tagsBox.querySelector(`[data-tag="${tagText}"]`)) {
                const tagElement = document.createElement('div');
                tagElement.className = 'tag_item_in_box';
                tagElement.dataset.tag = tagText;
                tagElement.innerHTML = `
                    ${tagText}
                    <span class="remove-tag">&times;</span>
                `;
                tagsBox.appendChild(tagElement);

                // 更新顯示的 list_item
                updateListItems();
            }
        });
    });

    tagsBox.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-tag')) {
            const tagElement = e.target.parentElement;
            tagsBox.removeChild(tagElement);

            // 更新顯示的 list_item
            updateListItems();
        }
    });

    // 更新顯示的 list_item
    function updateListItems() {
        const selectedTags = Array.from(tagsBox.querySelectorAll('.tag_item_in_box')).map(tag => tag.dataset.tag);

        listItems.forEach(listItem => {
            const tags = Array.from(listItem.querySelectorAll('.tag')).map(tag => tag.textContent.trim());
            const matches = selectedTags.every(tag => tags.includes(tag));

            if (matches) {
                listItem.style.display = 'block';
            } else {
                listItem.style.display = 'none';
            }
        });
    }

    // 右邊類別切換時的處理
    filterItems.forEach(filter => {
        filter.addEventListener('click', function () {
            const region = this.getAttribute('data-filter');

            // 移除所有標籤的活動狀態
            filterItems.forEach(f => f.classList.remove('active'));
            // 為點擊的標籤添加活動狀態
            this.classList.add('active');

            // 顯示或隱藏區塊
            listItems.forEach(item => {
                if (region === 'all' || item.getAttribute('data-region') === region) {
                    item.style.display = 'block'; // 顯示區塊
                } else {
                    item.style.display = 'none'; // 隱藏區塊
                }
            });

            // 更新顯示的 list_item 根據 tags_box 中的標籤
            updateListItems();
        });
    });
});

