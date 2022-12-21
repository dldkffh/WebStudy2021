jQuery(document).ready(function () { //대소문자 구분함 j Q u e r y

    let checkboxInterval = setInterval(function () { 
        moveRight();
    }, 3000);
    
    $('#checkbox').click(function () {   
        if ($(this).prop("checked")) {
            checkboxInterval = setInterval(function () { 
                moveRight();
            }, 3000);
        } else {
            clearInterval(checkboxInterval);
        }
    });

    //변수 선언
    const slideCount = $('.sa-slider ul li').length;
    const slideWidth = $('sa-slider ul li').width();
    const slideHeight = $('.sa-sliderul li').height();
    const sliderUIWidth = slideCount * slideWidth;

    $('.sa-slider').css({
        width: slideWidth,
        height: slideHeight
    });
    $('.sa-slider ul').css({
        width: sliderUIWidth,
        marginLeft: -slideWidth
    });

    $('.sa-slider ul li:last-child').prependTo('.sa-slider ul');

    function moveLeft() {
        $('.sa-slider ul').animate({
            left: +slideWidth //슬라이드 이동
        }, 500, function () {
            $('.sa-slider ul li:last-child').prependTo('.sa-slider ul'); //붙이기
            $('.sa-slider ul').css('left', ''); //left 0으로 위치 초기화
        });
    };

    function moveRight() {
        $('.sa-slider ul').animate({
            left: -slideWidth //슬라이드 이동
        }, 500, function () {
            $('.sa-slider ul li:first-child').appendTo('.sa-slider ul'); //붙이기
            $('.sa-slider ul').css('left', ''); //left 0으로 위치 초기화
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
});