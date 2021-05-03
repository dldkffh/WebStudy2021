/*  mainpage java script  */

$(document).ready(function () {
    $(".sub, #sub_background").hide();

    $("#sub_background,.gnb>li").mouseover(function () {
        $("#sub_background").stop().show();
        $(this).children(".sub").show();
    })

    $("#sub_background, .gnb>li").mouseout(function () {
        $("#sub_background").hide();
        ``
        $(this).children(".sub").hide();
    })


    $('.lnb').each(function () {
        $lnb_depth1 = $(this).find('.lnb_depth1'),
            $lnb_depth2 = $(this).find('.lnb_depth2');


        $lnb_depth1.click(function () {
            if (!$(this).hasClass('lnb_1_active')) {
                $lnb_depth1.removeClass('lnb_1_active');
                $(this).addClass('lnb_1_active');
            } else {
                $(this).removeClass('lnb_1_active');
            }
        });

        $lnb_depth2.click(function () {
            return false;
        });
    });

    $("ul.art_tab_contents li:first").siblings().hide();
    $("ul.art_tab_menu li a").click(function () {
        $("ul.art_tab_menu li a").removeClass("selected");
        $(this).children("a").addClass("selected");
        $("ul.art_tab_contents li").fadeOut(600);
        $($(this).attr("href")).fadeIn("slow");
        return false;
    });
});


//Get the button:
//fixedNav = document.getElementById("fixedNav");
topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    /* TOPUP button */
    if (document.body.scrollTop > 1940 || document.documentElement.scrollTop > 1940) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    /* TOP fixed Navigation */
    if (document.body.scrollTop > 1045 || document.documentElement.scrollTop > 1045) {
        fixedNav.style.position = "fixed";
        fixedNav.style.top = "0";
        fixedNav.style.left = "0";
    } else {
        fixedNav.style.position = "relative";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = window.innerHeight; // For Safari
    document.documentElement.scrollTop = window.innerHeight; // For Chrome, Firefox, IE and Opera
}
