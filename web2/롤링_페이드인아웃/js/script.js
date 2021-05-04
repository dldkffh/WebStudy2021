// 페이드 인아웃 제이쿼리

$(document).ready(function() {
   
    $("#slider ul li:gt(0)").hide();
    
    setInterval(function() {
        $('#slider ul .item:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slider ul');
    },3000);
    
});