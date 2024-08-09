// topbar
window.addEventListener("scroll", function () {
    var topbar = document.getElementById("topbar");
    if (window.scrollY > 100) {  // 如果页面滚动超过100px
        topbar.classList.add("collapsed");
    } else {
        topbar.classList.remove("collapsed");
    }
});
// 滾動卡片 懸浮停止
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
// about 泡泡特效
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
// barlist 套件
var $slider = $('.slideshow .slider'),
    maxItems = $('.item', $slider).length,
    dragging = false,
    tracking,
    rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
    $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: true,
    speed: 1000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

    if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
        $('.slideshow-right .slider').slick('slickGoTo', -1);
        $('.slideshow-text').slick('slickGoTo', maxItems);
    } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
        $('.slideshow-right .slider').slick('slickGoTo', maxItems);
        $('.slideshow-text').slick('slickGoTo', -1);
    } else {
        $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
        $('.slideshow-text').slick('slickGoTo', nextSlide);
    }
}).on("mousewheel", function (event) {
    event.preventDefault();
    if (event.deltaX > 0 || event.deltaY < 0) {
        $(this).slick('slickNext');
    } else if (event.deltaX < 0 || event.deltaY > 0) {
        $(this).slick('slickPrev');
    };
}).on('mousedown touchstart', function () {
    dragging = true;
    tracking = $('.slick-track', $slider).css('transform');
    tracking = parseInt(tracking.split(',')[5]);
    rightTracking = $('.slideshow-right .slick-track').css('transform');
    rightTracking = parseInt(rightTracking.split(',')[5]);
}).on('mousemove touchmove', function () {
    if (dragging) {
        newTracking = $('.slideshow-left .slick-track').css('transform');
        newTracking = parseInt(newTracking.split(',')[5]);
        diffTracking = newTracking - tracking;
        $('.slideshow-right .slick-track').css({ 'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')' });
    }
}).on('mouseleave touchend mouseup', function () {
    dragging = false;
});

$('.slideshow-right .slider').slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 950,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 900,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});
// 套件結束