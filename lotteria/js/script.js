/* 메인 스크립트 */

$(document).ready(function () {
    
    $(".sub, .fnb_background").hide();
    
    $(".fnb_background, .gnb").hover(function() {
        $(".sub, .fnb_background").stop().slideToggle();
//        $(">.sub").stop().slideToggle();
    })
});