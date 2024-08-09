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

document.addEventListener("DOMContentLoaded", function () {
    let pops = document.querySelectorAll(".pop");

    pops.forEach(pop => {
        let delay = Math.random() * 2; // 随机延迟 0-2 秒
        let duration = 2 + Math.random(); // 随机持续时间 1-2 秒
        let interval = Math.random() * 4 + 1; // 随机重复间隔 1-5 秒

        pop.style.animationDelay = `${delay}s`;
        pop.style.animationDuration = `${duration}s`;

        setInterval(() => {
            pop.classList.remove('bubble-animate');
            setTimeout(() => {
                pop.classList.add('bubble-animate');
            }, delay * 1000);
        }, interval * 1000);
    });
});