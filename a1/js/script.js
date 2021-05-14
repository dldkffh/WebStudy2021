/* JSUT SHOPPING MALL JQUERY */

$(document).ready(function () {
    //POPUP
    $('.popup').hide();
    $('.pop-on').click(function () {
        $('.popup').show();
    });  
    $('.popup button').click(function () {
        $('.popup').hide();
    });
    
    //GNB MENU
    $('.sub, .drop-box').hide();
    $('.gnb').hover(function () {
        //        $('.sub, .drop-box').fadeToggle();
        $('.sub, .drop-box').stop().slideToggle(600);
    });

    //SLIDE
    setInterval(function () {
        $('.visual .slide').animate({
            marginTop: "-=300px"
        }, 1500, function () {
            $('.visual .slide li:first').appendTo('.visual .slide');
            $('.visual .slide').css("marginTop", "0px")
        });
    }, 3000);

    //TAB MENU : NOTICE/GALLERY
    $('.tab-menu li').click(function () {
        $('.tab-menu li').removeClass("selected");
        $(this).addClass("selected");
        $('.panel li').css("z-index", "0");
        $($('a', this).attr('href')).css("z-index", "99");
    });
});
