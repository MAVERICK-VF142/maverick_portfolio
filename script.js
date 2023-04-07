const featuredTabScroll = document.querySelector(".featured-tab-scroll");
const scrollLeftBtn = document.querySelector("#scroll-left");
const scrollRightBtn = document.querySelector("#scroll-right");

let scrollPosition = 0;
const scrollStep = 200;

scrollLeftBtn.addEventListener("click", () => {
    scrollPosition += scrollStep;
    if (scrollPosition > 0) {
        scrollPosition = 0;
    }
    featuredTabScroll.style.transform = `translateX(${scrollPosition}px)`;
});

scrollRightBtn.addEventListener("click", () => {
    const maxScrollPosition = featuredTabScroll.scrollWidth - featuredTabScroll.clientWidth;
    scrollPosition -= scrollStep;
    if (scrollPosition < -maxScrollPosition) {
        scrollPosition = -maxScrollPosition;
    }
    featuredTabScroll.style.transform = `translateX(${scrollPosition}px)`;
});
