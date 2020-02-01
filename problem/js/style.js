$(function(){
    $(".level-1").click(function(){
        $(".overlay").fadeIn(200);
        $(".modal").fadeIn(200);
    });

    $(".close-btn, .overlay").click(function(){
        $(".overlay").fadeOut(200);
        $(".modal").fadeOut(200);
    });

    $(".answer1-1, .answer1-2").click(function(){
        $(".mini-modal-a").fadeIn(200);
    });

    $(".close-btn-2").click(function(){
        $(".mini-modal-a").fadeOut(200);
    });

    $(".answer1-3").click(function(){
        $(".mini-modal-c").fadeIn(200);
    });

    $(".close-btn-2").click(function(){
        $(".mini-modal-c").fadeOut(200);
    });
});