function sliderStart() {
    const slider = document.getElementById('slide-wrap');
    const slideItem = slide.querySelectorAll('slideItem');
    const totalNum = slideItem.length - 1;
    const FadeTime = 2000;
    const IntervalTime = 5000;
    let actNum = 0;
    let nowSlide;
    let NextSlide;

    slideItem[0].classList.add('show-', 'zoom-');

    setInterval(() => {
        if (actNum < totalNum) {
            nowSlide = slideItem[actNum];
            NextSlide = slideItem[++actNum];

            nowSlide.classList.remove('show');
            NextSlide.classList.add('show-', 'zoom-');
            setTimeout(() => {
                nowSlide.classList.remove('zoom-');
            })
        }
    })
}