$(document).ready(function () {

    // Home Page Links

    // Home
    $("#home-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#home-connect").offset().top
        }, 'slow');
    });

    // Portfolio
    $("#portfolio-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#portfolio-connect").offset().top - 60
        }, 'slow');
    });

    // About
    $("#about-nav").on('click', function () {
        window.location = "https://brenton-jenkins.com/about.html";
    });

    // Contact
    $("#contact-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#footer-connect").offset().top
        }, 'slow');
    });


    // Portfolio Page Links

    // Home
    $("#home-nav-portfolio").on('click', function () {
        window.location = "https://brenton-jenkins.com/";
    });

    // Portfolio
    $("#portfolio-nav-portfolio").on('click', function () {
        window.location = "https://brenton-jenkins.com/#portfolio-connect";
    });

    // About
    $("#about-nav").on('click', function () {
        window.location = "https://brenton-jenkins.com/about.html";
    });

    // Contact
    $("#contact-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#footer-connect").offset().top
        }, 'slow');
    });

    // Top
    $("#btn-top").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#home-connect").offset().top
        }, 'slow');
    });


    // About Page Links

    // About
    $("#about-nav-about").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#about-connect").offset().top
        }, 'slow');
    });

});