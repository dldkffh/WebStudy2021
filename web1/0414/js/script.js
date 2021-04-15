// 제이쿼리 

$(document).ready(function () {
//    $(".sub").hide();
//    
//    $(".gnb>li").mouseover(function () {
//        $(this).children(".sub").stop().slideDown();
//    });
//    
//    $(".gnb>li").mouseout(function () {
//       $(this).children(".sub").stop().slideUp(); 
//    });
    
    $(".sub").hide();
    
    $(".gnb>li").hover(function() {
        $(this).children(".sub").stop().slideToggle();
//        $(">.sub").stop().slideToggle();
    })
});
