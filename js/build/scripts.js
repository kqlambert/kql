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
	$('.landing').height($(window).height());
	$('nav[role="navigation"]').height($(window).height());
});

/* ------------------------------- *\
	# Navigation
\* ------------------------------- */
$('.close-nav').click(function (e) {
	e.preventDefault();
	$('nav[role="navigation"]').fadeOut();
});
// $('nav[role="navigation"]').click(function (e) {
	
// });
$('.menu-btn').click(function (e) {
	e.preventDefault();
	$('nav[role="navigation"]').fadeIn();
});