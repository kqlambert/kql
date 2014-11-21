/* ------------------------------- *\
	# General
\* ------------------------------- */
/*global $*/
/*global console*/
/*node browser: true*/
'use strict';
var b 	 = $('body'),
	winH = $(window).height();
$(window).load(function () {
	$('.load').fadeOut();
	$('.wrap').removeClass('preload');
	$('.block .wrapper').height(winH);
});