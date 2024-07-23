window.addEventListener('scroll', function() {
    const topbar = document.getElementById('topbar');
    if (window.scrollY > 50) {
        topbar.classList.add('collapsed');
    } else {
        topbar.classList.remove('collapsed');
    }
});