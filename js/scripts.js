//Custom JS
$(document).ready(function () {
    $('.fade-start').fadeIn(3000);
    $('.header__burguer, .header__anchor').click(function (e) {
        if ($(window).outerWidth() < 713)
            $('.header__nav, .header__burguer').toggleClass('header__toggled');
        if (!$(this).attr('target'))
            e.preventDefault();
    });


    function setHeightArticle() {
        $('.start').height($(window).height());
    }

    function setWidthPercent() {
        var bars = $('[data-percent]');
        bars.each(function (i, val) {
            var width = $(val).attr('data-percent') - 10;
            $(val).attr('style', 'width: ' + width + '%');
        })
    }

    function verifyScroll() {
        if (start.offset().top == scrollTop || (scrollTop + 100) < about.offset().top)
            setActiveMenu('start');
        else if ((scrollTop + 100) >= about.offset().top && (scrollTop + 100) < formation.offset().top)
            setActiveMenu('about');
        else if ((scrollTop + 100) >= formation.offset().top && (scrollTop + 100) < skills.offset().top) {
            if ((scrollTop + 115) >= skills.offset().top) 
                setActiveMenu('skills');
            else 
                setActiveMenu('formation');
        }else if((scrollTop + 100) > skills.offset().top)
            setActiveMenu('skills');
    }

    function setActiveMenu(href) {
        $('.header__ul-items').find('.header_anchor-active').removeClass('header_anchor-active');
        $('.header__ul-items').find('a[href*="' + href + '"]').children().addClass('header_anchor-active');
    }

    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        if (target.selector.indexOf("item") == -1) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - ($(window).outerWidth() > 713 ? 100 : 70)
                }, 1400);
                return false;
            }
        }
    });

    // Sumir Header scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    var start = $('#start');
    var about = $('#about');
    var formation = $('#formation');
    var skills = $('#skills');
    var scrollTop = 0;
    var element = $('.opacity');
    var range = 200;
    $(window).on('scroll', function () {
        //Sumir Header
        if ($(window).outerWidth() <= 713)
            didScroll = true;
        //opacity Title
        scrollTop = $(window).scrollTop();
        var offset = element.offset().top;
        var height = element.outerHeight();
        offset = offset + height / 2;
        var calc = 1 - (scrollTop - offset + range) / range;

        element.css({ 'opacity': calc });

        if (calc > '1') {
            element.css({ 'opacity': 1 });
        } else if (calc < '0') {
            element.css({ 'opacity': 0 });
        }

        //Set active menu
        verifyScroll();
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.header').addClass('header__top');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.header').removeClass('header__top');
            }
        }

        lastScrollTop = st;
    }


    setHeightArticle();
    setWidthPercent();
    verifyScroll();
});