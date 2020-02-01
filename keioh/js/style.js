var mySwiper1 = new Swiper('.swiper1', {
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false
    },

    navigation: {
        nextEl: '.next1',
        prevEl: '.prev1'
    },

    pagination: {
        el: '.page1',
        type: 'bullets',
        clickable: true
    }
});

var mySwiper2 = new Swiper('.swiper2', {
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false
    },


    slidesPerView: 4,
    navigation: {
        nextEl:'.next2',
        prevEl:'.prev2'
    },
});