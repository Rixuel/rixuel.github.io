// For comparing previous and current visited URLs
var previousURL = document.referrer;
var prevParts = previousURL.split('.');
var prevsub = prevParts[0];
var prevdomain = prevParts[1];

var full = window.location.href;
var parts = full.split('.');
var sub = parts[0];
var domain = parts[1];

if (!((prevsub === sub) && (prevdomain === domain))) {
	// Previous and Current URLs don't match. Show the preload screen pic
	document.getElementById("loader").innerHTML = "<img src='images/rixuelbanner.png' id='fadein'>";
	
	// Hidden stuff for milliseconds
	document.body.style.overflow = 'hidden';
	setTimeout(function () {
		"use strict";
		document.body.style.overflow = 'visible';
		// Add pointer-events: none; to #loader to be able to click on Edge and IE.
		document.getElementById("loader").style.pointerEvents = 'none';
	}, 4500);
	document.body.scrollTop = document.documentElement.scrollTop = 0;
} else {
	document.getElementById("loader").remove();
}
