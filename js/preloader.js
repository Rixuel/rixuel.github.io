var previousURL = document.referrer;
var prevParts = previousURL.split('.');
var prevsub = prevParts[0];
var prevdomain = prevParts[1];

var full = window.location.href;
var parts = full.split('.');
var sub = parts[0];
var domain = parts[1];

if ((prevsub == sub) && (prevdomain == domain)) {
	console.log("Previous URL and current URL matches!!!");
	// Do nothing if the previous and current URL match
} else {
	console.log("Previous URL and current URL don't match...");
	// Show the preload screen
	// Load the CSS file if previous and current URL don't match
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = 'css/preloader.css';
	link.media = 'all';
	head.appendChild(link);
	document.getElementById("loader").innerHTML = "<img src='images/rixuelbanner.png' id='fadein'>";
	
	// Hidden the scrollbar for milliseconds
	document.body.style.overflow = 'hidden';
	setTimeout(function () {
		"use strict";
		document.body.style.overflow = 'visible';
	}, 5000);
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}
