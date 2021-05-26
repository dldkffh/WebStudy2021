$(document).ready(function() {
    $(".snb_mo").css("left", "-330px");
    $(".layerSnb_mo").hide();

    $(".m_menu_btn").click(function() {
        $(".layerSnb_mo").show(1, function() {
            $(".snb_mo").animate({
                left:"0px"
            });
        });
        return false;
    });

    $(".layerSnb_mo").click(function(e) {
        if($(".layerSnb_mo").has(e.tagret).length === 0) {
            $(".snb_mo").animate({
                left:"-330px"
            }, function() {
                $(".layerSnb_mo").hide();
            });
        }
    });


    $(".snb_mo > ul > li ul").hide();

    $(".snb_mo > ul > li > a").click(function() {
        $("+ul", this).slideToggle("slow");
        return false;
    });

    $(".snb_mo > ul > li > ul > li > a").click(function() {
        $("+ul:not(.nodata)", this).slideToggle("slow");
        return false;
    });


    $(".search_box").hide();

    $(".search a").click(function() {
        $(this).toggleClass("on");
        $(".search_box").slideToggle("slow");
        return false;
    });
});

