jQuery(document).ready(function () {
    // const tab_num_left; 
    // const tab_num_right;
    
    $('.tab-slide').hide();
    $('.tab-slide').eq(0).show();
    $('.tab-slide').eq(5).show();


    var tab_left = 0;
    var tab_right = 5;

    /** click and change */
    $('.round').click( function() {
        i = $(this).index();
        tf = $(this).parent().hasClass("best-round");
        if(tf) {
            tab_left = i;
            tab_change(tab_left, $('.round').eq(tab_left));
        } else {
            tab_right = i;
            tab_change(tab_right, $('.round').eq(tab_right+5));
        }
    });

    setInterval(function() {
        tab_change(tab_left, $('.round').eq(tab_left));
        tab_change(tab_right, $('.round').eq(tab_right+5));

        if(tab_left>=4) {
            tab_left = 0;
        } else {
            tab_left++;
        }

        if(tab_right>=4) {
            tab_right = 0;
        } else {
            tab_right++;
        }
    }, 3000);

    setInterval(function() {
        
    }, 3000);
    
    
    function tab_change(i, element) {
        p = element.parent();
        p.children().removeClass("long");
        p.children().eq(i).addClass("long");
        p.siblings('.tab-slider').children('.tab-slide').hide();
        p.siblings('.tab-slider').children('.tab-slide').eq(i).show();
    };
    
});