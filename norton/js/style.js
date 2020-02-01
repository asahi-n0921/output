$(function(){

    var pageTop = $('.scroll');

    pageTop.click(function(){
        $('body,html').animate({
            scrollTop: 0
        },500);
        return false;
    });
});