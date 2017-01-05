<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1">
		<meta name="mobile-web-app-capable" content="yes">
		<meta id="theme-color" name="theme-color" content="#fff">
		<style>
			.load{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:#fff;z-index:10;}.load .spinner{width:60px;height:60px;background-color:#333;margin:0 auto;top:40%;position:relative;animation:rotateplane 1.2s infinite ease-in-out;}@keyframes rotateplane{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg);}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);}}
		</style>
		<script>
			function loadCSS(e,n,o,t){"use strict";var d=window.document.createElement("link"),i=n||window.document.getElementsByTagName("script")[0],r=window.document.styleSheets;return d.rel="stylesheet",d.href=e,d.media="only x",t&&(d.onload=t),i.parentNode.insertBefore(d,i),d.onloadcssdefined=function(e){for(var n,o=0;o<r.length;o++)r[o].href&&r[o].href===d.href&&(n=!0);n?e():setTimeout(function(){d.onloadcssdefined(e)})},d.onloadcssdefined(function(){d.media=o||"all"}),d}
			loadCSS("./css/global.css");
		</script>
		<noscript><link rel="stylesheet" href="./css/global.css"></noscript>
		<link rel="shortcut icon" href="./i/icon.png">
		<title>NEW PAGE</title>
		<meta name="description" content="Description of new page">
	</head>
	<body>
		<div class="load">
			<div class="spinner"></div>
		</div>
		<div class="wrap preload">
			<header role="banner">
				<div class="wrapper">
					<div class="clear">
						<div class="logo left">
							<a href="/">KQL</a>
						</div>
						<nav class="right">
							<ul class="clear">
								<li class="menu-btn"><a href="#"></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<main role="main">
				<section>
					<div class="landing">
						<div class="landing__wrapper">
							<h1>Keegan Lambert</h1>
							<h2>Front-End Web Developer Living and Working on the West Coast.</h2>
							<div class="back">
							    <div class="button_base b05_3d_roll">
							        <div>View work</div>
							        <div>View work</div>
							    </div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
		<footer role="contentinfo">
			<div class="wrapper">

			</div>
		</footer>
		<script async src="./js/scripts.min.js"></script>
	</body>
</html>
