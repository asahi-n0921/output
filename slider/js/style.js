$(function(){
    $('.slider-title').on('click',function(){
        $(this).toggleClass('open');
        $(this).next('.slider-text').slideToggle();
    });
});