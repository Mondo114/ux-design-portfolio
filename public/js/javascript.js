$(document).ready(function () {

    // Navbar Background Color Change
    $(function () {
        $(document).scroll(function () {
            var nav = $(".nav");
            var navlink = $(".nav-link");
            var banner = $(".bannerJS");
            //   var projectTitle = $(".project-title");

            nav.toggleClass('scrolled', $(this).scrollTop() > banner.height());
            navlink.toggleClass('scrolledlink', $(this).scrollTop() > banner.height());

            //   nav.toggleClass('scrolled', $(this).scrollTop() > projectTitle.height());
            //   navlink.toggleClass('scrolledlink', $(this).scrollTop() > projectTitle.height());
        });
    });


    // Navbar Close After Click
    //   $('.navbar-collapse ul li').click(function(){ 
    //     $('.navbar-toggle:visible').click();
    //     });

    // $(document).ready(function(){
    //     $('.div').click(function(){
    //     })
    // $(document).ready(function(){
    //     $('.navbar-collapse div').click(function(){
    //         $('#show-menu').trigger('click');
    //     })
    //   })
    // })

    // $('.navbar-collapse div').click(function(){ 
    //     $('.navbar-collapse').css('height', '0');
    //     $('.navbar-collapse').removeClass('in');
    //   });

    // $(".navbar-collapse div").click(function () {
    //     $(".nav-content").hide();
    // });

    // $(function () {
    //     $(".navbar-collapse div").click(function () {
    //         if ($(".nav-content").is(":visible"))
    //             $(".nav-content").hide();
    //     });
    // });

    // $(function () {
    //     $(".navbar-toggler").click(function () {
    //         if ($(".nav-content").is(":hidden"))
    //             $(".nav-content").show();
    //     });
    // });

    // $("#portfolio-nav").on("click", function (event) {
    //     $('html,body').animate({
    //         scrollTop: $("#portfolio-connect").offset().top - 60
    //     }, 'slow');
    //     $('.navbar-toggler').click();
    // });



    // Home Page Links

    // Home
    $("#home-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#home-connect").offset().top - 72
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


    // About Page Links

    // Home
    $("#home-nav-portfolio").on('click', function () {
        window.location = "https://brenton-jenkins.com/";
    });

    // Portfolio
    $("#portfolio-nav-portfolio").on('click', function () {
        window.location = "https://brenton-jenkins.com/#portfolio-connect";
    });

    // About
    $("#about-nav-about").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#about-connect").offset().top
        }, 'slow');
    });

    // Contact
    $("#contact-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#footer-connect").offset().top
        }, 'slow');
    });

});



// Top
// $("#btn-top").on("click", function (event) {
//     $('html,body').animate({
//         scrollTop: $("#home-connect").offset().top
//     }, 'slow');
// });