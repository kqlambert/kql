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

/* ------------------------------- *\
	# Open/close navigation
\* ------------------------------- */
function toggleMenu () {
	var menu = $('.menu');
	var menubtn = $('.open-menu');
	if (menubtn.hasClass('opened')) {
		menubtn.removeClass('opened');
		menu.height(0);
	} else {
		menubtn.addClass('opened');
		menu.height($(window).height());
	}
}
$('.open-menu').click(function (e) {
	e.preventDefault();
	toggleMenu();
});
$('.menu a').click(function () {
	toggleMenu();
});
$('.menu').on('click', function (e) {
	var el = $(this),
		ul = el.find('ul');
	if (!ul.is(e.target) && ul.has(e.target).length === 0) toggleMenu();
});
$('.logo').on('click', function () {
	toggleMenu();
});