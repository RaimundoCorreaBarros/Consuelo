$(window).scroll(function() {
    if ($("nav").offset().top > 400) {
        $("nav").addClass("bg-light");
        $("nav").addClass("navbar-light");
        $("nav").removeClass("navbar-dark");
    } else {
        $("nav").removeClass("bg-light");
        $("nav").removeClass("navbar-light");
        $("nav").addClass("navbar-dark");
    }
});