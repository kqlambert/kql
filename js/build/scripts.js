/* ------------------------------- *\
	# General
\* ------------------------------- */
/*global $*/
/*global console*/
/*node browser: true*/
'use strict';
var b = $('body'),
	winH = $(window).height() - 1;
$(window).load(function () {
	$('.load').fadeOut();
	$('.wrap').removeClass('preload');
	$('.hero .wrapper').height(winH);
});

// Ripple (element must have the classes .js-ripple and .c-ripple to work)
var $ripple = $('.js-ripple');
$ripple.on('click.ui.ripple', function (e) {
	var $this = $(this),
		$offset = $this.parent().offset(),
		$circle = $this.find('.c-ripple__circle'),
		x = e.pageX - $offset.left,
		y = e.pageY - $offset.top;
	$circle.css({
		top: y + 'px',
		left: x + 'px'
	});
	$this.addClass('is-active');
});
$ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
	$(this).removeClass('is-active');
});
