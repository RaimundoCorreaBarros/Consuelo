$(window).scroll(function() {
    if ($("nav").offset().top > 400) {
        $("nav").addClass("bg-light");
    } else {
        $("nav").removeClass("bg-light");
      
    }
});