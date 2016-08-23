// For comparing previous and current visited URLs
var previousURL = document.referrer,
	prevParts = previousURL.split('.'),
	prevsub = prevParts[0],
	prevdomain = prevParts[1];

var full = window.location.href,
	parts = full.split('.'),
	sub = parts[0],
	domain = parts[1];

if (!((prevsub === sub) && (prevdomain === domain))) {
	// Previous and Current URLs don't match. Show the preload screen pic
	document.getElementById("loadcont").innerHTML = "<img src='images/rixuelbanner.png' id='fadein'>";
	
	// Hidden scroll for milliseconds
	document.body.style.overflow = "hidden";
	
	// After some milliseconds, make stuff visible
	setTimeout(function () {
		"use strict";
		document.body.style.overflow = "visible";
		// Add pointer-events: none; to #loader to be able to click on Edge.
		document.getElementById("loader").style.pointerEvents = "none";
	}, 4500);
	
	document.body.scrollTop = document.documentElement.scrollTop = 0;
} else {
    document.getElementById("loader").style.display = "none";
}