window.addEventListener("scroll", function () {
    var topbar = document.getElementById("topbar");
    if (window.scrollY > 100) {  // 如果页面滚动超过100px
        topbar.classList.add("collapsed");
    } else {
        topbar.classList.remove("collapsed");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.addEventListener('mouseover', () => {
            column.style.animationPlayState = 'paused';
        });
        column.addEventListener('mouseout', () => {
            column.style.animationPlayState = 'running';
        });
    });
});