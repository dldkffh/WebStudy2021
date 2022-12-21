$(document).ready(function() {
    /** NAV ASIDE */
    $("aside").hide();
    $(".gnb-short button").click(function() {
        $("aside").show();
    });
    $("aside .fa-times").click(function() {
        $("aside").hide();
    });

    $("aside .sub").hide();
    $('aside .snb li').mouseover(function() {
        $('.sub', this).show();
    });
    $('aside .snb li').mouseleave(function() {
        $('.sub', this).hide();
    });

    /* MENU HOVER */
    $('nav .sub').hide();
    $('nav .gnb li').mouseover(function() {
        $('.sub', this).show();
    });
    $('nav .gnb li').mouseleave(function() {
        $('.sub', this).hide();
    });


    /* MENU IMG */
    let menuIndex;
    $('.menu-img li:first-child').siblings().hide();
    $('.multi-img-menu>li').hover(function() {
        menuIndex = $(this).index();
        console.log(menuIndex);
        $(this).parents().children('.menu-img').children().eq(menuIndex).siblings().hide();
        $(this).parents().children('.menu-img').children().eq(menuIndex).show();
    });

    /* NEW ARRIVAL */
    let newNum;
    let newLength = $('.new-item').length;
    let itemWidth = $(window).width()*0.11;
    for (var i = 0; i < newLength; i++) {
        newNum = $('.new-item').eq(i);
        newNum.css({'left': 365*i + itemWidth});
    }


});