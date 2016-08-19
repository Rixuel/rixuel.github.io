document.body.style.overflow = 'hidden';
setTimeout(function () {
	"use strict";
	document.body.style.overflow = 'visible';
}, 5000);
document.body.scrollTop = document.documentElement.scrollTop = 0;

var previousURL = document.referrer;
var prevParts = previousURL.split('.');
var prevsub = prevParts[0];
var prevdomain = prevParts[1];
/*
console.log("Previous URL: " + previousURL);
console.log("Prev Subdomain: " + prevsub);
console.log("Prev Domain: " + prevdomain);
*/
var full = window.location.href;
var parts = full.split('.');
var sub = parts[0];
var domain = parts[1];
/*
console.log("Full: " + full);
console.log("Subdomain: " + sub);
console.log("Domain: " + domain);
*/

if ((prevsub == sub) && (prevdomain == domain)) {
	console.log("Previous URL and current URL matches!!!");
} else {
	console.log("Previous URL and current URL don't matches...");
}
