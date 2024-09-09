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


function setupPreviewClick() {
    // 取得所有的 list_item 元素
    const previewContainers = document.querySelectorAll('.list_item');
    const overlay = document.getElementById("overlay-BL");
    const myWindow = document.getElementById("loginWindow-BL");
    const close = document.getElementById("closebtn-BL");

    // 為每個 preview--container 添加點擊事件處理程序
    previewContainers.forEach(previewContainer => {
        previewContainer.addEventListener('click', function (event) {
            event.preventDefault(); // 阻止默認行為，防止自動聚焦
            
            // 檢查點擊的是否是愛心圖標按鈕或圖片
            const isHeartButton = event.target.matches('button[id^="imageButton"]');
            const isHeartImage = event.target.matches('img[id^="buttonImage"]');
            
            if (isHeartButton || isHeartImage) {
                // 如果點擊的是愛心圖標按鈕或圖片，僅切換圖片，不彈出視窗
                
                // 找到愛心圖標的圖片元素
                const img = isHeartButton 
                    ? event.target.querySelector('img')  // 點擊的是按鈕，則找按鈕內的圖片
                    : event.target;  // 點擊的是圖片，則直接使用目標

                // 切換愛心圖標圖片
                if (img.src.includes('collect-heart.svg')) {
                    img.src = './img/barlist/collect-heart-onclick.svg';
                } else {
                    img.src = './img/barlist/collect-heart.svg';
                }

                return; // 停止執行，避免彈出視窗
            }

            // 如果點擊的不是愛心圖標，則顯示彈出視窗
            overlay.style.display = "block"; // 顯示遮罩層
            myWindow.style.display = "block"; // 顯示彈出視窗
            
            // 禁用頁面滾動
            document.body.style.overflow = 'hidden';
            
            // 使用setTimeout來觸發漸變效果
            setTimeout(() => {
                overlay.style.opacity = "1"; // 遮罩層漸變顯示
                myWindow.style.opacity = "1"; // 彈出視窗漸變顯示
            }, 10);
        });
    });

    // 當使用者點擊關閉按鈕時，隱藏彈出視窗和遮罩層，並添加漸變效果
    close.onclick = function () {
        overlay.style.opacity = "0"; // 遮罩層漸變隱藏
        myWindow.style.opacity = "0"; // 彈出視窗漸變隱藏
        
        setTimeout(() => { // 使用setTimeout來等待漸變完成後隱藏
            overlay.style.display = "none"; // 隱藏遮罩層
            myWindow.style.display = "none"; // 隱藏彈出視窗

            // 恢復頁面滾動
            document.body.style.overflow = '';
        }, 300); // 漸變時間與transition一致
    };

    // 當使用者點擊遮罩層時，也隱藏彈出視窗和遮罩層，並添加漸變效果
    overlay.onclick = function () {
        close.onclick(); // 調用close的onclick事件
    };
}

// 在頁面加載後設置點擊事件
window.addEventListener('load', function() {
    setupPreviewClick();
});


// 跳出視窗切換分頁
document.addEventListener('DOMContentLoaded', function () {
    // 取得所有分類的元素
    const categoryButtons = document.querySelectorAll('.categories-BL div');
    
    // 監聽每個分類的點擊事件
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            // 移除所有分類上的 active 樣式
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // 添加當前點擊分類的 active 樣式
            this.classList.add('active');

            // 取得對應的內容 target
            const targetContent = this.getAttribute('data-target');

            // 隱藏所有內容
            document.querySelectorAll('.contant-BL > div').forEach(content => {
                content.classList.remove('active');
            });

            // 顯示對應的內容
            document.querySelector(`.${targetContent}`).classList.add('active');
        });
    });
})

// 加入收藏跳出通知
document.querySelector('.collect-BL a').addEventListener('click', function(event) {
    event.preventDefault();  // 阻止預設的跳轉行為
    alert('已加入收藏');
});

// 跳出儲存電話
document.querySelector('.icon-phone').addEventListener('click', function(event) {
    event.preventDefault();  // 阻止預設的跳轉行為
    alert('已將電話儲存到剪貼簿');
});

// 跳出儲存資訊
document.querySelector('.icon-map').addEventListener('click', function(event) {
    event.preventDefault();  // 阻止預設的跳轉行為
    alert('已將店家資料儲存到剪貼簿');
});

// 選擇所有的 list_item 元素
document.querySelectorAll('.list_item').forEach(item => {
    // 取得星星圖片元素
    const starIcon = item.querySelector('.star-icon');
    
    // 監聽滑鼠進入事件
    item.addEventListener('mouseenter', function() {
        // 當滑鼠進入，變更星星圖片
        starIcon.src = './img/barlist/star.svg';  // 替換成你想要顯示的星星圖片
    });

    // 監聽滑鼠離開事件
    item.addEventListener('mouseleave', function() {
        // 當滑鼠離開，恢復星星圖片
        starIcon.src = './img/barlist/star1.svg';  // 恢復原來的星星圖片
    });
});