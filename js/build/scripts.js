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

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-91293615-1', 'auto');
ga('send', 'pageview');
