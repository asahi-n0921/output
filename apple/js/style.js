
$(function(){
    $('.menu-title').on('click', function(){
        $(this).toggleClass('open');
        $(this).next('.list-item').slideToggle();
    });
});