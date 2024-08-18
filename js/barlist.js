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

document.addEventListener('DOMContentLoaded', () => {
    const tagsBox = document.querySelector('.tags_box');
    const tagItems = document.querySelectorAll('.tag_item');
    const listItems = document.querySelectorAll('.list_item');
    const filterItems = document.querySelectorAll('.filter_item');
    const allRegionItems = document.querySelectorAll('.tag_item.north, .tag_item.central, .tag_item.south');

    let selectedRegion = 'all'; // 初始化選中的地區為全部

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
            const matchesTags = selectedTags.every(tag => tags.includes(tag));
            const matchesRegion = selectedRegion === 'all' || listItem.getAttribute('data-region') === selectedRegion;

            if (matchesTags && matchesRegion) {
                listItem.style.display = 'block';
            } else {
                listItem.style.display = 'none';
            }
        });
    }

    // 右邊類別切換時的處理
    filterItems.forEach(filter => {
        filter.addEventListener('click', function () {
            selectedRegion = this.getAttribute('data-filter');

            // 移除所有篩選的活動狀態
            filterItems.forEach(f => f.classList.remove('active'));
            // 為點擊的篩選添加活動狀態
            this.classList.add('active');

            // 顯示或隱藏地區標籤
            allRegionItems.forEach(item => {
                if (selectedRegion === 'all' || item.classList.contains(selectedRegion)) {
                    item.style.display = 'block'; // 顯示地區標籤
                } else {
                    item.style.display = 'none'; // 隱藏地區標籤
                }
            });

            // 更新顯示的 list_item 根據 tags_box 中的標籤和選中的地區
            updateListItems();
        });
    });
});
