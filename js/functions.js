function COPYRIGHT() {
    "use strict";
    var date, year, copyright;
	date = new Date();
	year = date.getFullYear();
	
    copyright = "&copy; 2014 - " + year + " Website and Design by Lord Rixuel. All other contents are copyrighted to their respective owners.";
    document.getElementById("footer").innerHTML = copyright;
}

function logo() {
    "use strict";
	var logoArr, index;
    logoArr = [];

	logoArr[0] = "<img src='images/lordrixlogo.png' border='0'/>";
	logoArr[1] = "<img src='images/lordrixlogo2.png' border='0'/>";
	logoArr[2] = "<img src='images/lordrixlogo3.png' border='0'/>";
	logoArr[3] = "<img src='images/lordrixlogo4.png' border='0'/>";

	index = Math.floor(Math.random() * logoArr.length);
    document.getElementById("toplogo").innerHTML = logoArr[index];
}

// Style to underline the current menu choice.
function selectedMenu(id) {
    "use strict";
    var Style = document.getElementById(id).style;
    Style.color = "#80ff00";
    Style.textShadow = "0 0 4px #80FF00";
    Style.borderBottom = "4px solid #80ff00";
    Style.paddingBottom = "8px";
}
function checkPageWithMenu() {
    "use strict";
    /*Get ../name.html */
    var n = window.location.href.lastIndexOf('/'),
        pageWithExt = window.location.href.substring(n + 1),

    /*Get .html */
        ndot = window.location.href.lastIndexOf('.'),
        Ext = window.location.href.substring(ndot),

    /*Get name */
        pageWithoutExt = pageWithExt.replace(Ext, "");

    if (pageWithoutExt.toString().toLowerCase() === "") {
        selectedMenu("MenuHome");
    }
    if (pageWithoutExt.toString().toLowerCase() === "index") {
        selectedMenu("MenuHome");
    }
    if (pageWithoutExt.toString().toLowerCase() === "profile") {
        selectedMenu("MenuProfile");
    }
    if (pageWithoutExt.toString().toLowerCase() === "gallery") {
        selectedMenu("MenuGallery");
    }
    if (pageWithoutExt.toString().toLowerCase() === "downloads") {
        selectedMenu("MenuDownloads");
    }
    if (pageWithoutExt.toString().toLowerCase() === "random") {
        selectedMenu("MenuRandom");
    }
    if (pageWithoutExt.toString().toLowerCase() === "links") {
        selectedMenu("MenuLinks");
    }
}
function navbar() {
	"use strict";
    
	var menubar =
		"<ul class='topnav'>" +
        "<li><a href='index.html' id='MenuHome'>Home</a></li>" +
        "<li><a href='profile.html' id='MenuProfile'>Profile</a></li>" +
        "<li><a href='gallery.html' id='MenuGallery'>Gallery</a></li>" +
        "<li><a href='downloads.html' id='MenuDownloads'>Downloads</a></li>" +
        "<li><a href='random.html' id='MenuRandom'>Random</a></li>" +
        "<li><a href='links.html' id='MenuLinks'>Links</a></li>" +
        "<li class='icon'><a href='javascript:void(0);' onclick='menuToggle()'>&#9776;</a></li>" +
		"</ul>";
    
    document.getElementById("menubar").innerHTML = menubar;
	checkPageWithMenu();
}
function menuToggle() {
    "use strict";
	document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}


function randomMsg() {
    "use strict";
    var msg, index;
	msg = [];

	msg[0] = "Once upon a time, the end";
	msg[1] = "Server Offline: 0 players";
	msg[2] = "Life shall live and Death shall die";
	msg[3] = "Media + Army + Power = Ruler";
	msg[4] = "Everything has its up and down";
	msg[5] = "Have C+ in C++";
	msg[6] = "Random messages here";
	msg[7] = "Welcome to my website";
	msg[8] = "Thank you for visiting";
	msg[9] = "Just as planned!";
	msg[10] = "What is a man? A miserable little pile of secrets!";
	msg[11] = "Kamehameha!";
	msg[12] = "Kept you waiting huh?";
	msg[13] = "Arrogance is a sin";
	msg[14] = "Nothing is true, everything is permitted.";
	msg[15] = "♥ ♦ ♣ ♠";
	msg[16] = "Synergy: 1+1=3";
	msg[17] = "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89";
	msg[18] = "██████████ Loading Hax 99%";
	msg[19] = "Be water my friend";
	msg[20] = "1+1 = 1+1";

	
	index = Math.floor(Math.random() * msg.length);
    document.getElementById("toprightmsg").innerHTML = msg[index];
}

function toggle_visibility(id) {
    "use strict";
	var e = document.getElementById(id);
	if (e.style.display === 'block') {
		e.style.display = 'none';
    } else {
		e.style.display = 'block';
    }
}


//////////////////////////////////////////


function easyGuessLogin() {
    "use strict";
	document.getElementById("LoginMessage").innerHTML = "";

	var oForm = document.forms.loginForm,
        login = oForm.elements.login.value,
        pass = oForm.elements.PassWord.value;
	
	
	if ((login === null) || (login === "")) {
		document.getElementById("LoginMessage").innerHTML = "Enter an Username!";
	} else if ((pass === null) || (pass === "")) {
		document.getElementById("LoginMessage").innerHTML = "Enter a Password!";
	} else {
		if ((pass === "12345") || (pass === "admin") || (pass === "password")
                || (pass === "pass") || (pass === "rixuel")) {
			// When Password is valid
			document.getElementById("toHideLogForm").innerHTML = "";
			toggle_visibility('toHideContent');
		} else {
			document.getElementById("LoginMessage").innerHTML = "Invalid Password!";
		}
	}
	
	return (false);
}

