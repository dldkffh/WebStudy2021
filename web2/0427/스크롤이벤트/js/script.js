//자바스크립트
$(document).ready(function () {

    // 스크롤시 나타나게하는 jquery 
    $(window).scroll(function () {
        var value = $(this).scrollTop(); //변수 value= 스크롤한 자기자신의 스크롤 높이위치값을 정의함
       

        $(".text1").animate({ // text1에게 애니메이트 해라
            opacity: 1 // 투명도 100%로 나타나게 하라 (미리 css 파일에서 투명도 0으로 해두었음)
        }, 500, "swing"); // 속도- 0.5초, 동작효과(easing 이징)- 끝점에 가서 살짝 느려짐


        if (value > 700) { // 스크롤한 위치가 700이상이면
            $(".text2").css({ // css메소드로도 명령 가능함.
                transform: "translateX(50px)", // css 변형속성중 가로위치- 오른쪽으로 50px 가라.
                opacity: 1 
            });
        }

        if (value > 1500) {
            $(".text3").animate({
                marginLeft: "100px",  // 애니메이트 위치변동은 이 명령으로 함. 왼쪽여백 100px 떨어져라 
                opacity: 1
            }, 1000, "swing");
        }
    });

    //따라다니는 퀵메뉴 설정

    $(function () {
        var currentPosition = parseInt($(".quick").css("top"));
		 // 변수 currentPosition (현재위치 지정)= 문자열을 숫자열로 바꾸기 ( 퀵메뉴 박스를 위로 가게 해 )
		 
        $(window).scroll(function () {
            var position = $(window).scrollTop();   // 변수 position = 현재 스크롤바의 위치값을 반환합니다. 
			
            $(".quick").stop().animate({
                "top": position + currentPosition + "px"
            }, 600);
        });
    });

    //클릭하면 탑으로 이동-퀵메뉴 안의 버튼


    $(function () {
        $('#up').click(function () {  // 위로 가는 버튼 클릭.
            $('body,html').animate({    // 문서전체가 애니메이트 되어라.
                scrollTop: 0             //스크롤 높이위치값을 0 으로 하여 맨위로 가게 함. 
            }, 800);                //0.8 초 동안
            return false;
        });
        
        var scrollHeight = $(document).height(); // 변수 scrollHeigh = 작성된 문서 높이로 정의 
        
        $('#down').click(function () {  // 아래 버튼 클릭하면
            $('body,html').animate({
                scrollTop: scrollHeight  //현재 스크롤바의 위치값은 작성된 문서 높이만큼 가게 하자
            }, 800);
            return false;
        });
    });

    // 아래로 가면 top버튼 나타나고 클릭하면 위로이동 하는 메뉴

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});
