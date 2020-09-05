(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    // Scroll to top button appear
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    //Number inputs only
    $(".allow-numeric").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode

        if (!(keyCode >= 48 && keyCode <= 57)) {
            $(".error").css("display", "inline");
            return false;
        } else {
            $(".error").css("display", "none");
        }
    });

    $('.required-text').hide();

    //Validation for login page
    $('.login-btn').click(function () {
        if ($('.login-email').val() === "") {
            $('.login-email-required').show();
        }
        else {
            $('.login-email-required').hide();
        }

        if ($('.login-password').val() === "") {
            $('.login-password-required').show();
        }
        else {
            $('.login-password-required').hide();

        }
    });

    //Validation for registration page
    $('.register-btn-in-register-page').click(function () {
        if ($('.register-username').val() === "") {
            $('.required-text-username').show();
        }
        else {
            $('.required-text-username').hide();
        }

        if ($('.register-password').val() === "") {
            $('.required-text-password').show();
        }
        else {
            $('.required-text-password').hide();

        }

        if ($('.register-confirm-password').val() === "") {
            $('.required-text-confirm-password').show();
        }
        else {
            $('.required-text-confirm-password').hide();
        }

        if ($('.register-security-question option:selected').text() === "Choose a security question") {
            $('.required-text-security-question').show();
        }
        else {
            $('.required-text-security-question').hide();
        }

        if ($('.register-security-answer').val() === "") {
            $('.required-text-security-answer').show();
        }
        else {
            $('.required-text-security-answer').hide();
        }

        if ($('.register-phone').val() === "") {
            $('.required-text-phone').show();
        }
        else {
            $('.required-text-phone').hide();
        }

        if ($('.register-email').val() === "") {
            $('.required-text-email').show();
        }
        else {
            $('.required-text-email').hide();
        }

        if ($('.register-bank option:selected').text() === "Select bank service") {
            $('.required-text-bank').show();
        }
        else {
            $('.required-text-bank').hide();
        }

        if ($('.register-account-holder-name').val() === "") {
            $('.required-text-account-holder-name').show();
        }
        else {
            $('.required-text-account-holder-name').hide();
        }

        if ($('.register-bank-account-number').val() === "") {
            $('.required-text-bank-account-number').show();
        }
        else {
            $('.required-text-bank-account-number').hide();
        }
    });

})(jQuery); // End of use strict
