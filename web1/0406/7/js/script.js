//한줄 주석
/* 여러줄 주석 */

//대한투어 제이쿼리
$(".sub, .drop-box").hide();

$(".gnb>li").hover(function(){
    $(".sub, .drop-box").stop().slideToggle();
});
