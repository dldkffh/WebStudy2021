$(document).ready(function () {
	
    // ------ 모든 슬라이드 숨김
    $('#slider ul li:gt(0)').hide(); // 슬라이더 ul li중 0(첫번째) 다음 것은 가려라. 
	//  :gt(n) = n 보다 큰것,  :lt(n) = n 보다 작은것,  :eq(n) = n 번째 
	
	
    // ------ 첫번째 슬라이드 아이템에 대해 반복을 실행
    setInterval(() => { // 반복해라. 
        $('#slider ul .item:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slider ul');
    }, 3000);
	/* .item 의 첫번째 객체는 1초동안 사라지고 다음객체는 1초동안 나타나고, 
		그 끝에 #slider ul 목록을 추가해라.  */
});   