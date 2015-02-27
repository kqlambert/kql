/* ------------------------------- *\
	# General
\* ------------------------------- */
/*global $*/
/*global console*/
/*node browser: true*/
'use strict';
var b 	 = $('body'),
	winH = $(window).height() - 250;
$(window).load(function () {
	$('.load').fadeOut();
	$('.wrap').removeClass('preload');
	$('.hero .wrapper').height(winH);
});