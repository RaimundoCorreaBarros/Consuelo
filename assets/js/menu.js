$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
});

.bg-color.scrolled {
    background-color: $white;
    color: #000 !important;
    a {
        color: #000 !important;
        text-decoration: none;
    }

    path {
        fill: #000 !important;
    }
    .navbar-dark .navbar-toggler {
        color: rgba(0, 0, 0, 0.5) !important;
        border-color: rgba(0, 0, 0, 0.1) !important;
    }
}

