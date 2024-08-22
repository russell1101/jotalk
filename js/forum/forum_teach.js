document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0; // 當前顯示的圖片索引
    let sections = document.querySelectorAll('.section');
    const indicators = document.querySelectorAll('.indicator a');
    const teachAtc = document.querySelector('.teach_atc');
    const categories = document.querySelectorAll('.top-section .categories .category');

    // 更新 sections 以獲取當前 active 區域的圖片
    function updateSections() {
        return document.querySelectorAll('.teach_atc .active .section');
    }

    // 顯示指定索引的圖片
    function showSection(index) {
        sections = updateSections(); // 確保 sections 是最新的
        sections.forEach((section, i) => {
            section.classList.toggle('active', i === index);
        });
    }

    // 處理滾輪事件
    function handleScroll(event) {
        const sections = updateSections();
        if (teachAtc.contains(event.target) && sections.length > 0) {
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
            const sections = updateSections();
            if (sections.length > targetIndex) {
                currentIndex = targetIndex;
                showSection(currentIndex);
            }
        }
    }

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

        // 更新 sections 以獲取新區域的圖片
        updateSections();

        // 切換類別後，顯示該分類的第一張圖片，並且不使用動畫效果
        currentIndex = 0;
        showSection(currentIndex);
    }

    // 映射表
    const headerMapping = {
        'teach_baseWine': 'site-headerBase',
        'teach_bartendWine': 'site-headerBartend',
        'teach_teachWine': 'site-headerTeach'
    };

    // 初始化
    updateSections();
    showSection(currentIndex);

    // 事件監聽
    window.addEventListener('wheel', handleScroll, { passive: false });
    indicators.forEach(indicator => indicator.addEventListener('click', handleIndicatorClick));
    categories.forEach(category => category.addEventListener('click', handleCategoryClick));
});

// 指示器

document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有區域和指示器
    const teachAtc = document.querySelector('.teach_atc');
    const teachPicBase = document.querySelector('.teach_picBase');
    const teachPicBartend = document.querySelector('.teach_picBartend');
    const teachPicTeach = document.querySelector('.teach_picTeach');

    const indicatorsBase = document.querySelectorAll('.site-headerBase .indicator a');
    const indicatorsBartend = document.querySelectorAll('.site-headerBartend .indicator a');
    const indicatorsTeach = document.querySelectorAll('.site-headerTeach .indicator a');

    let currentIndexBase = 0;
    let currentIndexBartend = 0;
    let currentIndexTeach = 0;

    function activateIndicator(indicators, index) {
        // 移除所有指示器的 active 類別
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // 為指定的指示器添加 active 類別
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
    }

    function handleIndicatorClick(event, indicators, currentIndexSetter) {
        event.preventDefault();
        const targetIndex = Array.from(indicators).indexOf(event.target.closest('a'));

        if (targetIndex >= 0) {
            activateIndicator(indicators, targetIndex);
            currentIndexSetter(targetIndex);
        }
    }

    // 設置每個指示器的點擊事件
    indicatorsBase.forEach(indicator => {
        indicator.addEventListener('click', (event) => handleIndicatorClick(event, indicatorsBase, (index) => currentIndexBase = index));
    });

    indicatorsBartend.forEach(indicator => {
        indicator.addEventListener('click', (event) => handleIndicatorClick(event, indicatorsBartend, (index) => currentIndexBartend = index));
    });

    indicatorsTeach.forEach(indicator => {
        indicator.addEventListener('click', (event) => handleIndicatorClick(event, indicatorsTeach, (index) => currentIndexTeach = index));
    });

    // 處理滾輪事件，只在 teach_atc 區域內觸發
    teachAtc.addEventListener('wheel', (event) => {
        event.preventDefault();

        const delta = Math.sign(event.deltaY);

        if (teachPicBase.classList.contains('active')) {
            const sections = teachPicBase.querySelectorAll('.section');
            const totalSections = sections.length;
            currentIndexBase = Math.max(0, Math.min(currentIndexBase + delta, totalSections - 1));
            activateIndicator(indicatorsBase, currentIndexBase);
        } else if (teachPicBartend.classList.contains('active')) {
            const sections = teachPicBartend.querySelectorAll('.section');
            const totalSections = sections.length;
            currentIndexBartend = Math.max(0, Math.min(currentIndexBartend + delta, totalSections - 1));
            activateIndicator(indicatorsBartend, currentIndexBartend);
        } else if (teachPicTeach.classList.contains('active')) {
            const sections = teachPicTeach.querySelectorAll('.section');
            const totalSections = sections.length;
            currentIndexTeach = Math.max(0, Math.min(currentIndexTeach + delta, totalSections - 1));
            activateIndicator(indicatorsTeach, currentIndexTeach);
        }
    });

    // 初始化
    function initialize() {
        activateIndicator(indicatorsBase, 0);
        activateIndicator(indicatorsBartend, 0);
        activateIndicator(indicatorsTeach, 0);
    }

    // 切換類別時重置指示器
    document.querySelectorAll('.category-switch').forEach(category => {
        category.addEventListener('click', () => {
            // 根據當前顯示的區域重置對應的指示器
            if (teachPicBase.classList.contains('active')) {
                currentIndexBase = 0;
                activateIndicator(indicatorsBase, currentIndexBase);
            } else if (teachPicBartend.classList.contains('active')) {
                currentIndexBartend = 0;
                activateIndicator(indicatorsBartend, currentIndexBartend);
            } else if (teachPicTeach.classList.contains('active')) {
                currentIndexTeach = 0;
                activateIndicator(indicatorsTeach, currentIndexTeach);
            }
        });
    });

    initialize();
});






















