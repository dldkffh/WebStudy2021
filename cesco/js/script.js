/*  mainpage java script  */

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
