// 메뉴 제이쿼리


/* 메뉴 슬라이더 */

$(document).ready(function () {
    $(".gnb>li").hover(function () {
        $(".sub, .drop-box").stop().slideToggle();
    });
});
