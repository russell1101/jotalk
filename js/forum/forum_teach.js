document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.top-section .categories .category');
    const teachAtc = document.querySelector('.teach_atc');

    // 映射表
    const headerMapping = {
        'teach_baseWine': 'site-headerBase',
        'teach_bartendWine': 'site-headerBartend',
        'teach_teachWine': 'site-headerTeach'
    };

    // 處理分類點擊事件
    function handleCategoryClick(event) {
        const target = event.target;
        if (!target.classList.contains('category')) return;

        // 移除所有分類的 active 樣式
        categories.forEach(category => category.classList.remove('active'));

        // 添加點擊的分類的 active 樣式
        target.classList.add('active');

        // 獲取目標區域
        const targetId = target.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // 隱藏所有下方區域
        document.querySelectorAll('.teach_picBase, .teach_picBartend, .teach_picTeach').forEach(el => el.classList.remove('active'));

        // 顯示對應的下方區域
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // 隱藏所有 site-header 元素
        document.querySelectorAll('.site-headerBase, .site-headerBartend, .site-headerTeach').forEach(el => el.classList.remove('active'));

        // 使用映射表獲取對應的 site-header 類別
        const headerClass = headerMapping[targetId];
        const targetHeader = document.querySelector(`.${headerClass}`);

        // 顯示對應的 site-header
        if (targetHeader) {
            targetHeader.classList.add('active');
        }

        // 滾動位置回到頂部
        teachAtc.scrollTop = 0;
    }

    // 事件監聽
    categories.forEach(category => category.addEventListener('click', handleCategoryClick));
});









document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0; // 當前顯示的圖片索引
    let sections = document.querySelectorAll('.section');
    const indicators = document.querySelectorAll('.indicator a');
    const teachAtc = document.querySelector('.teach_atc');
    const categories = document.querySelectorAll('.top-section .categories .category'); // 修改選擇器以匹配新的 class 名稱

    // 更新 sections 以獲取當前 active 區域的圖片
    function updateSections() {
        sections = document.querySelectorAll('.teach_atc .active .section');
    }

    // 顯示指定索引的圖片
    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.opacity = i === index ? '1' : '0';
            section.style.visibility = i === index ? 'visible' : 'hidden';
            if (i === index && currentIndex !== 0) { // 保留特效，除了第一張圖
                section.style.animation = 'zoom-scroll 0.5s ease-in-out'; // 應用 zoom-scroll 動畫
            } else {
                section.style.animation = 'none'; // 移除其他圖片的動畫
            }
        });
    }

    // 處理滾輪事件
    function handleScroll(event) {
        if (teachAtc.contains(event.target)) {
            if (event.deltaY > 0 && currentIndex < sections.length - 1) {
                currentIndex++;
            } else if (event.deltaY < 0 && currentIndex > 0) {
                currentIndex--;
            }
            showSection(currentIndex);
            event.preventDefault();
        }
    }

    // 處理指示器點擊事件
    function handleIndicatorClick(event) {
        event.preventDefault();
        const targetIndex = [...indicators].indexOf(event.target.closest('a'));
        if (targetIndex >= 0) {
            currentIndex = targetIndex;
            showSection(currentIndex);
        }
    }

    // 處理分類點擊事件
    function handleCategoryClick(event) {
        const target = event.target.getAttribute('data-target');

        // 移除所有區域的 active 樣式
        document.querySelectorAll('.teach_picBase, .teach_picBartend, .teach_picTeach').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.site-headerBase, .site-headerBartend, .site-headerTeach').forEach(el => el.classList.remove('active'));

        // 添加對應區域的 active 樣式
        document.getElementById(target).classList.add('active');
        // document.querySelector(`.site-header${target.split('_')[1].charAt(0).toUpperCase() + target.split('_')[1].slice(1)}`).classList.add('active');

        // 更新 sections 以獲取新區域的圖片
        updateSections();

        // 切換類別後，顯示該分類的第一張圖片，並且不使用動畫效果
        currentIndex = 0;
        showSection(currentIndex);

        // 滾動位置回到頂部
        teachAtc.scrollTop = 0;

        // 更新選中的分類樣式
        categories.forEach(category => {
            category.classList.remove('active'); // 移除所有分類的 active 樣式
            category.style.border = '1px solid transparent'; // 移除所有分類的邊框
        });
        event.target.classList.add('active'); // 添加點擊的分類的 active 樣式
        event.target.style.border = '1px solid #ffffff'; // 添加點擊的分類的邊框
    }

    // 初始化
    updateSections();
    showSection(currentIndex);

    // 事件監聽
    window.addEventListener('wheel', handleScroll, { passive: false });
    indicators.forEach(indicator => indicator.addEventListener('click', handleIndicatorClick));
    categories.forEach(category => category.addEventListener('click', handleCategoryClick));
});

