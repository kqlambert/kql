/* ------------------------------------------------
// GENERAL
------------------------------------------------ */
/*global $*/
/*global console*/
/*node browser: true*/
'use strict';
var b = $('body');
$(window).load(function () {
	$('.load').fadeOut();
	$('.wrap').removeClass('preload');
});