//Custom JS
$(document).ready(function(){
	$('.header__burguer').click(function(e){
		$('.header__nav, .header__burguer').toggleClass('header__toggled');
		e.preventDefault();
	});

	$('.start__arrow').click(function (e) {
	    $('html, body').animate({ scrollTop: 1200 }, 0);
	    return false;
	})

	function setHeightArticle(){
		$('.start').height($(window).height());
	}

	function setWidthPercent() {
	    var bars = $('[data-percent]');
	    bars.each(function (i, val) {
	        var width = $(val).attr('data-percent') - 10;
	        $(val).attr('style', 'width: ' + width + '%');
	    })
	}

	setHeightArticle();
	setWidthPercent();
});