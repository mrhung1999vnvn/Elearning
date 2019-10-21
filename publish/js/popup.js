$(document).ready(function(){
    $('#rating').click(function(){
        $('overlay').fadeIn(300);
    });

    $('#close').click(function(){
        $('#overlay').fadeOut(300);
    })
});