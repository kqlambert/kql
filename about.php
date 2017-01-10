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
		<title>About > Keegan Lambert</title>
		<meta name="description" content="About > Keegan Lambert">
	</head>
	<body>
		<div class="load">
			<div class="spinner"></div>
		</div>
		<div class="wrap preload">
			<?php require_once('inc/header.php'); ?>
			<main role="main">
				<section>
					<div class="content-wrapper">
						<div class="wrapper about">
							<h1>Hello World,</h1>
							<p>My name is Keegan Lambert, Front-End Developer, from Arizona, currently looking for work in the San Diego, CA Area.</p>
							<p>I am a self-taught, compotent web programmer who loves to find challenging work, no matter the industry or scale. I have a passion for creating unique interactions for users that are both fun and easy to use. I have worked for a variety of clients in many different industries, ranging from business finance to Pok&eacute;mon blogs, building com[plex database driven book-keeping to simple "who we are" websites.</p>
							<p>I have been married to the love of my life for 8 years with whom I have a 5 year old daughter. Currently serving with the National Guard and always looking for new life experiences.</p>
							<p>I am currently looking for work! <a href="mailto:kqlambert@gmail.com">kqlambert@gmail.com</a></p>
						</div>
					</div>
				</section>
			</main>
		</div>
		<?php require_once('inc/footer.php'); ?>
		<script async src="./js/scripts.min.js"></script>
	</body>
</html>
