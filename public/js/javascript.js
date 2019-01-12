$(document).ready(function () {

    // Links
    // $("#home-nav").on("click", function (event) {
    //     $('html,body').animate({
    //         scrollTop: $("#home-connect").offset().top - 60
    //     }, 'slow');
    // });

    $("#home-nav").on('click', function () {
        window.location = "http://localhost:3000/index.html";
    });

    $("#about-nav").on('click', function () {
        window.location = "http://localhost:3000/about.html";
    });

    $("#contact-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#footer-connect").offset().top - 60
        }, 'slow');
    });

});