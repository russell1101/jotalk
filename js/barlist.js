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
    // 取得所有的 preview--container 元素
    const previewContainers = document.querySelectorAll('.preview--container');
    const overlay = document.getElementById("overlay-BL");
    const myWindow = document.getElementById("loginWindow-BL");
    const close = document.getElementById("closebtn-BL");

    // 為每個 preview--container 添加點擊事件處理程序
    previewContainers.forEach(previewContainer => {
        previewContainer.addEventListener('click', function (event) {
            event.preventDefault(); // 阻止默認行為，防止自動聚焦
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


// 彈跳視窗的內容切換
document.querySelectorAll('.categories-BL div').forEach(category => {
    category.addEventListener('click', function() {
        // 移除所有分類的 active 類別
        document.querySelectorAll('.categories-BL div').forEach(item => {
            item.classList.remove('active');
        });
        // 為點擊的分類添加 active 類別
        this.classList.add('active');

        // 隱藏所有內容區域
        document.querySelectorAll('.infoContant, .menuContant, .newsContant').forEach(content => {
            content.classList.remove('active');
        });
        // 顯示對應的內容區域
        const target = this.getAttribute('data-target');
        document.querySelector(`.${target}`).classList.add('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有圖標
    const phoneIcon = document.getElementById('phone');
    const mapIcon = document.getElementById('map');
    
    // 為電話圖標添加事件監聽器
    phoneIcon.addEventListener('click', (event) => {
        event.preventDefault(); // 防止點擊後的默認行為（例如跳轉）
        alert('已複製電話');
    });
    
    // 為地圖圖標添加事件監聽器
    mapIcon.addEventListener('click', (event) => {
        event.preventDefault(); // 防止點擊後的默認行為（例如跳轉）
        alert('已複製該店家資訊至剪貼簿');
    });
});