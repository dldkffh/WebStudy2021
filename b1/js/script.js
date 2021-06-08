$(document).ready(function () {
    /* 메뉴 */
    $(".snb").hide();
    $(".gnb").hover(function () {
        $(".snb").stop().slideToggle();
    });
    
    /* 슬라이더 */
    setInterval(function() {
        $(".slider").animate( {
            marginLeft : "-=1200px"
        }, 1500, function () {
            $(".slider li:first").appendTo($(".slider"));
            $(".slider").css("marginLeft", "0px");
        });
    }, 3000);
    
    /* 하단 컨텐츠 */
    $("#gallery").hide();
    $(".t-menu li").click(function() {
        $(".t-menu li").removeClass("t-menu-on");
        $(this).addClass("t-menu-on");
        
        $(".t-panel li").hide();
        $($('a', this).attr("href")).show();
        
    });
    
    /* 팝업 */
    $(".popup").hide();
    $("#notice-popup").click(function() {
        $(".popup").show();
    });
    $(".popup button").click(function() {
        $(".popup").hide();
    });
});