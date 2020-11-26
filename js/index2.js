// Animated sticky menu

$(document).on('scroll', function () {
    if($(this).scrollTop() > 1) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});

// Dropdown menu

$(document).ready(function() {
    $(".menu").on("click", function() {
        $("ul").toggleClass("open");
    });
});