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

    // Microgurt
    $(".microgurt-thumb").on('click', function () {
        window.location = "https://brenton-jenkins.com/microgurt.html";
    });

    // The Big 8
    $(".big8-thumb").on('click', function () {
        window.location = "https://brenton-jenkins.com/big8.html";
    });

    // Flexafont
    $(".flexafont-thumb").on('click', function () {
        window.location = "https://brenton-jenkins.com/flexafont.html";
    });

    // Tulum Cosmetics
    $(".tulum-thumb").on('click', function () {
        window.location = "https://brenton-jenkins.com/tulum.html";
    });

    // Antlers and Acorns
    $(".haley-thumb").on('click', function () {
        window.location = "https://brenton-jenkins.com/haley.html";
    });

    // New 2 Dev
    $(".new2dev-thumb").on('click', function () {
        window.location = "https://brenton-jenkins.com/new2dev.html";
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

    // Tech Startup Weekend
    $(".startup-thumb").on('click', function () {
        window.open("https://startupweekend.org/", "_blank");
    });

    // Antlers and Acorns
    $(".antlersandacorns-thumb").on('click', function () {
        window.open("https://www.antlersandacorns.com/", "_blank");
    });

    // New 2 Dev
    $(".new2dev-site-thumb").on('click', function () {
        window.open("https://new2dev.com/", "_blank");
    });


    // About Page Links

    // About
    $("#about-nav-about").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#about-connect").offset().top
        }, 'slow');
    });

    // My Web Development Portfolio
    $(".webdev-thumb").on('click', function () {
        window.open("https://brenton-jenkins-portfolio-2.herokuapp.com/", "_blank");
    });

});