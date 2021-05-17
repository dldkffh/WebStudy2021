$(document).ready(function() {
   //NAV
    $('nav ul.sub').hide();
    $('nav ul.gnb>li').hover(function() {
       $('ul.sub', this).stop().slideToggle(); 
    });
    
    /*
    setTimeout(function() {
        $('.sub').stop().slideUp();
    }, 3000);
    */
    
    $('nav ul.sub>li').mouseover(function() {
        $(this).css("background-color", "#eee");
    });
    $('nav ul.sub>li').mouseout(function() {
        $(this).css("background-color", "#fff");
    });
    
    //SLIDE
    setInterval(function() {
        $('.slide ul').animate({
           marginLeft : "-800px"
        }, 1000, function() {
            $('.slide ul li:first').appendTo($('.slide ul'))
            $('.slide ul').css("marginLeft", "0px")
        });
    }, 3000);
    
    //TAB MENU 
    $('.tab-menu li a').click(function() {
        $('.tab-p li').hide();
        $($(this).attr("href")).show();
        $('.tab-menu li a').removeClass("on");
        $(this).addClass("on");
    });
});