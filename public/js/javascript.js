$(document).ready(function () {

    // Links

    // Home
    $("#home-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#home-connect").offset().top - 60
        }, 'slow');
    });

    // $("#home-nav").on('click', function () {
    //     window.location = "http://localhost:3000/index.html";
    // });

    // Portfolio
    $("#portfolio-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#portfolio-connect").offset().top - 60
        }, 'slow');
    });

    // About
    $("#about-nav").on('click', function () {
        window.location = "http://localhost:3000/about.html";
    });

    // Contact
    $("#contact-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#footer-connect").offset().top - 60
        }, 'slow');
    });

     // Antlers and Acorns
     $(".haley-thumb").on('click', function () {
        window.open("https://www.antlersandacorns.com/", "_blank");
    });

    // New 2 Dev
    $(".new2dev-thumb").on('click', function () {
        window.open("https://new2dev.com/", "_blank");
    });

});