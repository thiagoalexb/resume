//Custom JS
$(document).ready(function () {
    $('.header__burguer').click(function (e) {
        $('.header__nav, .header__burguer').toggleClass('header__toggled');
        e.preventDefault();
    });

    $('.start__arrow').click(function (e) {
        $('html, body').animate({ scrollTop: 1200 }, 0);
        return false;
    })

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

    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        if (target.selector.indexOf("item") == -1) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });

    var header = $('.opacity');
    var range = 200;

    $(window).on('scroll', function () {

        var scrollTop = $(this).scrollTop();
        var offset = header.offset().top;
        var height = header.outerHeight();
        offset = offset + height / 2;
        var calc = 1 - (scrollTop - offset + range) / range;

        header.css({ 'opacity': calc });

        if (calc > '1') {
            header.css({ 'opacity': 1 });
        } else if (calc < '0') {
            header.css({ 'opacity': 0 });
        }

    });

    setHeightArticle();
    setWidthPercent();
});