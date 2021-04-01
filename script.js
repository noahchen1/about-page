/* go to top btn */

function scrollToTop() {
    var position =
        document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 6);
    } else clearTimeout(scrollAnimation);
}
