//레이어 팝업창 부분
$(function(){	
	$('.close').click(function(){
		$('.layer_popup').hide();
	});
});

//서브메뉴 부분
$(function(){
	$('nav > ul > li').mouseover(function(){
		$('ul',this).stop().fadeIn();
	});
	$('nav li').mouseout(function(){
		$('ul',this).stop().fadeOut();
	});
});
//슬라이더 부분
//animate({변경될 css속성}, 시간, 속도, 콜백함수);
$(function(){
	$('.allpage li:last').prependTo('.allpage');//마지막 li를 .allpage 안 제일 앞으로 데리고 와서 기다림.
	$('.btn_next').click(function(){
		$('.allpage').animate({marginLeft:'-=1200px'},1000, function(){
			$('.allpage li:first').appendTo('.allpage');//첫번째 li를 .allpage안 제일 뒤로 데리고 오면 공간이 빠져서 이미지가 한장씩 앞으로 밀림
			$('.allpage').stop().css('margin-left','-1200px');
		});
	});
	$('.btn_prev').click(function(){		$('.allpage').animate({marginLeft:'+=1200px'},1000, function(){
			$('.allpage li:last').prependTo('.allpage');
			$('.allpage').css('margin-left','-1200px');
		});
	});
	 setInterval(function(){
		$('.btn_next').trigger('click');
	 }, 3000);
});

//탭 메뉴 부분
$(function(){
	$('.tab_title li:last').click(function(){
		$('.gallery').show();
		$('.notice').hide();
		$('.tab_title a').removeClass('on'); //모든 a태그에서 on 클래스를 지워준다
		$('a',this).addClass('on');	//방금 클릭한 li안에 있는 자식 a 태그에게 on 클래스를 추가한다.		
	});
	$('.tab_title li:first').click(function(){
		$('.gallery').hide();
		$('.notice').show();
		$('.tab_title a').removeClass('on'); //모든 a태그에서 on 클래스를 지워준다
		$('a',this).addClass('on');	//방금 클릭한 li안에 있는 자식 a 태그에게 on 클래스를 추가한다.		
	});
});

//모달 윈도우 부분
$(function(){
	$('.popup').click(function(){
		$('.black, .modal').show();
	});
	$('.modal .close').click(function(){
		$('.black, .modal').hide();
	});
});











