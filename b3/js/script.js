/* INDEX JS */
$(document).ready(function() {
    //MODAL 
    $('#modal').hide();
    $('.notice ul li:first-child a').click(function() {
        $('#modal').show();
    });
    $('#modal button').click(function() {
        $('#modal').hide();
    });
    
    //NAV
    $('nav .gnb > li').hover(function () {
        $('.sub', this).fadeToggle();
        $('div', this).fadeToggle();
    });
    
    //SLIDE
    $('.slide li:first').siblings().hide();
   setInterval(function() {
       $('.slide li:first').fadeOut(1500).next().fadeIn(1500).end().appendTo('.slide');
       //next() : 내 동생 찾아줘, end() : 체인을 끊어내고 처음에 부른 선택자 "$('.slide li:first')" 불러
   }, 3000);
});