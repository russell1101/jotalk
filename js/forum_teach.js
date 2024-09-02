document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0; // 當前顯示的圖片索引
    const categories = document.querySelectorAll('.top-section .categories .category');
    const teachAtc = document.querySelector('.teach_atc');
    let sections = updateSections(); // 初始化 sections
    let currentIndicators = updateIndicators(); // 初始化指示器

    function updateSections() {
        return document.querySelectorAll('.teach_atc .active .section');
    }

    function updateIndicators() {
        return document.querySelectorAll('.teach_atc .active .indicator a');
    }

    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.toggle('active', i === index);
        });
        activateIndicator(currentIndicators, index);
    }

    function activateIndicator(indicators, index) {
        indicators.forEach(indicator => indicator.classList.remove('active'));
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
    }

    function handleScroll(event) {
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

    function handleIndicatorClick(event) {
        event.preventDefault();
        const targetIndex = [...currentIndicators].indexOf(event.target.closest('a'));
        if (targetIndex >= 0) {
            currentIndex = targetIndex;
            showSection(currentIndex);
        }
    }

    function handleCategoryClick(event) {
        const target = event.target;
        if (!target.classList.contains('category')) return;

        categories.forEach(category => category.classList.remove('active'));
        target.classList.add('active');

        const targetId = target.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        document.querySelectorAll('.teach_picBase, .teach_picBartend, .teach_picTeach').forEach(el => el.classList.remove('active'));
        if (targetSection) {
            targetSection.classList.add('active');
        }

        document.querySelectorAll('.site-headerBase, .site-headerBartend, .site-headerTeach').forEach(el => el.classList.remove('active'));
        const headerClass = headerMapping[targetId];
        const targetHeader = document.querySelector(`.${headerClass}`);
        if (targetHeader) {
            targetHeader.classList.add('active');
        }

        // 更新 sections 和 indicators 為新顯示的區域
        sections = updateSections();
        currentIndicators = updateIndicators();

        // 初始顯示第一張圖片和對應指示器
        currentIndex = 0;
        showSection(currentIndex);
    }

    const headerMapping = {
        'teach_baseWine': 'site-headerBase',
        'teach_bartendWine': 'site-headerBartend',
        'teach_teachWine': 'site-headerTeach'
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    categories.forEach(category => category.addEventListener('click', handleCategoryClick));
    document.querySelectorAll('.teach_atc .indicator a').forEach(indicator => indicator.addEventListener('click', handleIndicatorClick));

    showSection(currentIndex); // 初始化顯示第一張圖片和對應指示器
});

