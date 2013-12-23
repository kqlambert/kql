/* ------------------------------------------------
// GLOBALS
------------------------------------------------ */
/*global $*/
/*global alert*/
/*global window*/
/*global document*/
/*global console*/
/*global escape*/
/*node browser: true*/
var $body = $('body');
// simplify ajax calls
function ajx($method, $url, $data, $async, $type, $cache, $result) {
	'use strict';
	if (!$type) {
		$type = 'post';
	}
	if (!$async) {
		$async = true;
	}
	if (!$type) {
		$type = 'text';
	}
	if (!$cache) {
		$cache = false;
	}
	$.ajax({
		type: $method,
		url: $url,
		data: $data,
		async: $async,
		dataType: $type,
		cahce: $cache,
		beforeSend: function () {
			$('.spinner-wrapper').fadeIn();
		},
		complete: function () {
			$('.spinner-wrapper').fadeOut();
		},
		success: function (re) {
			$result(re);
		},
		error: function (re) {
			$result(re.responseText);
		}
	});
}
