/* back top button */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.top-bttn').fadeIn(250);
        }
        else {
            $('.top-bttn').fadeOut(250);
        }
    });
    $('.top-bttn').click(function () {
        $('html,body').animate(
            { scrollTop: 0 }, 400
        );
    })
});



