document.body.style.overflow = 'hidden';
setTimeout(function () {
	"use strict";
	document.body.style.overflow = 'visible';
}, 5000);
document.body.scrollTop = document.documentElement.scrollTop = 0;