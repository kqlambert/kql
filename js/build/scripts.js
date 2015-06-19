/* ------------------------------- *\
	# General
\* ------------------------------- */
/*global $*/
/*global console*/
/*node browser: true*/
'use strict';
$(window).load(function () {
	$('.load').fadeOut();
	$('.wrap').removeClass('preload');
});

// ripple
$('.ripple').on('click', function (e) {
	e.preventDefault();
	var x = e.pageX;
		y = e.pageY,
		el = $(this),
		clickY = y - el.offset().top,
		clickX = x - el.offset().left;
	el.find('svg').remove();
	el.append('<svg><circle cx="' + parseInt(clickX) + '" cy="' + parseInt(clickY) + '" r="0"></circle></svg>');
	setTimeout(function () {
		var c = el.find("circle");
		c.animate({
			'r' : el.outerWidth()
		}, 400, function () {
			el.find('svg').fadeOut('fast');
		});
	});
});