jQuery(document).ready(function () { //대소문자 구분함 j Q u e r y

    let checkboxInterval = 0; //이제 멈춤 개쩔어 
    $('#checkbox').click(function () {   
        if ($(this).prop("checked")) {
            checkboxInterval = setInterval(function () { //재할당 let 가능
                moveRight();
            }, 3000);
        } else {
            clearInterval(checkboxInterval);
        }
    });

    // setInterval(function () {
    //     moveRight();
    // }, 3000);

    //변수 선언
    const slideCount = $('#slider ul li').length;
    const slideWidth = $('#slider ul li').width();
    const slideHeight = $('#slider ul li').height();
    const sliderUIWidth = slideCount * slideWidth;

    /**
     * var 재설정 o 재할당 o
     * let 재설정 o 재할당 x
     * const 재설정 x 재할당 x
     * 보통의 경우 const 
     * 재할당이 필요한 경우 (드물다) let
     * var은 편하긴 한데 위험하다
     */

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });
    $('#slider ul').css({
        width: sliderUIWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth //슬라이드 이동
        }, 500, function () {
            $('#slider ul li:last-child').prependTo('#slider ul'); //붙이기
            $('#slider ul').css('left', ''); //left 0으로 위치 초기화
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth //슬라이드 이동
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul'); //붙이기
            $('#slider ul').css('left', ''); //left 0으로 위치 초기화
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
});