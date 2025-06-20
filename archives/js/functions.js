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

    logoArr[0] = "<img src='img/logo-citadelvania.png'/>";
    logoArr[1] = "<img src='img/logo-lord-rixuel.png'/>";
    logoArr[2] = "<img src='img/logo-rixuel-fantasy.png'/>";
    logoArr[3] = "<img src='img/logo-rixuel-creed.png'/>";
    logoArr[4] = "<img src='img/logo-damn-rixuel.png'/>";
    logoArr[5] = "<img src='img/logo-rixuel-stay-dark.png'/>";

    index = Math.floor(Math.random() * logoArr.length);
    document.getElementById("toplogo").innerHTML = logoArr[index];
}


/* For Bulma Menu Bar toggle */
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});

function navbar() {
    "use strict";
    var menubar =
        "<nav class='navbar' role='navigation' aria-label='main navigation'>" +
            "<div class='navbar-brand'>" +
                "<a class='navbar-item' href='index.html'><img src='img/rixuel-logo.png' width='112' height='28'></a>" +
                "<a role='button' class='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>" +
                    "<span aria-hidden='true'></span><span aria-hidden='true'></span><span aria-hidden='true'></span>" +
                "</a>" +
            "</div>" +
            "<div id='navbarBasicExample' class='navbar-menu'>" +
                "<div class='navbar-start'>" +
                    "<a class='navbar-item' href='index.html' id='MenuHome'>Home</a>" +
                    "<div class='navbar-item has-dropdown is-hoverable'>" +
                        "<a class='navbar-link' href='projects.html' id='MenuProjects'>Projects</a>" +
                        "<div class='navbar-dropdown'>" +
                            "<a class='navbar-item' href='app/cer'>Cash Exchange Rates</a>" +
                            "<a class='navbar-item' href='app/crypto'>Crypto</a>" +
                            "<a class='navbar-item' href='app/bible'>Read Bible Online</a>" +
                            "<a class='navbar-item' href='app/rpgday'>RPG Day</a>" +
                            "<a class='navbar-item' href='app/sortlist'>Sort the List</a>" +
                            "<a class='navbar-item' href='app/viewjson'>View JSON</a>" +
                            "<hr class='navbar-divider'>" +
                            "<a class='navbar-item' href='projects.html'>More...</a>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class='navbar-end'><div class='navbar-item'>" +
                    "<a href='https://discord.gg/qhCsvqT'><i class='navbar-item fab fa-discord fa-2x' aria-hidden='true' style='color:#7289DA;'></i></a>" +
                    "<a href='https://twitter.com/Rixuel'><i class='navbar-item fab fa-twitter fa-2x' aria-hidden='true' style='color:#1DA1F2;'></i></a>" +
                    "<a href='https://www.youtube.com/c/LordRixuel'><i class='navbar-item fab fa-youtube fa-2x' aria-hidden='true' style='color:#E62117;'></i></a>" +
                    "<a href='https://www.instagram.com/lordrixuel'><i class='navbar-item fab fa-instagram fa-2x' aria-hidden='true' style='color:#BF8360;'></i></a>" +
                    "<a href='https://github.com/Rixuel'><i class='navbar-item fab fa-github fa-2x' aria-hidden='true' style='color:#FFF;'></i></a>" +
                "</div></div>" +
            "</div>" +
        "</nav>";

    document.getElementById("menubar").innerHTML = menubar;
    checkPageWithMenu();
}

function menuToggle() {
    "use strict";
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

// Style to underline the current menu choice.
function selectedMenu(id) {
    "use strict";
    var Style = document.getElementById(id).style;
    Style.color = "#80ff00";
    Style.textShadow = "0 0 4px #80FF00";
    Style.borderBottom = "4px solid #80ff00";
    Style.paddingBottom = "4px";
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
    if (pageWithoutExt.toString().toLowerCase() === "about") {
        selectedMenu("MenuAbout");
    }
    if (pageWithoutExt.toString().toLowerCase() === "projects") {
        selectedMenu("MenuProjects");
    }
    if (pageWithoutExt.toString().toLowerCase() === "random") {
        selectedMenu("MenuRandom");
    }
    if (pageWithoutExt.toString().toLowerCase() === "links") {
        selectedMenu("MenuLinks");
    }
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
    msg[5] = "Grade C+ in C++";
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
    msg[21] = "UNLIMITED BLADE WORKS!!!";
    msg[22] = "Fake news!";
    msg[23] = "Ka ka ka ka kachi daze";
    msg[24] = "Zasshu!!";
    msg[25] = "Time Alter, Double Accel!";
    msg[26] = "People Die If They Are Killed";
    msg[27] = "Bang! Bang! Bang! Pull my devil trigger!";
    msg[28] = "Die monster! You don't belong in this world!";
    msg[29] = "GRIFFITH!!!!!!!!!!!!";
    msg[30] = "This is the difference between your and my eye-level";
    msg[31] = "Chan chan Ai Chiki Chiki Ban Ban";
    msg[32] = "Fight for all that's beautiful in the world";
    msg[33] = "Ad Astra Abyssosque";

    index = Math.floor(Math.random() * msg.length);
    document.getElementById("randomMessages").innerHTML = msg[index];
}

function adsbanners() {
    "use strict";
    var ads, index;
    ads = [];

    ads[0] = "<a href='#/'>" +
        "<img src='img/alternalogo.png' border='0'/></a>";

    ads[1] = "<a href='#/'>" +
        "<img src='img/terra.png' border='0'/></a>";

    index = Math.floor(Math.random() * ads.length);
    document.getElementById("adsfooter").innerHTML = ads[index];
}

function toggle_visibility(id) {
    "use strict";
    var e = document.getElementById(id);
    if (e.style.display === "block") {
        e.style.display = "none";
    } else {
        e.style.display = "block";
    }
}

function date_time(id) {
    "use strict";
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        d = date.getDate(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        day = date.getDay(),
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        result;
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    result = '[<b>' + h + ':' + m + ':' + s + '</b>] ' + days[day] + ', ' + months[month] + ' ' + d + ', ' + year;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("' + id + '");', '1000');
    return true;
}

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
        if ((pass === "12345") || (pass === "admin") || (pass === "password") ||
            (pass === "pass") || (pass === "rixuel")) {
            // When Password is valid
            document.getElementById("toHideLogForm").innerHTML = "";
            toggle_visibility('toHideContent');
        } else {
            document.getElementById("LoginMessage").innerHTML = "Invalid Password!";
        }
    }
    return (false);
}

/* Bulma CSS modal code */
function openBulmaModal(id) {
    "use strict";
    document.getElementById(id).classList.add('is-active');
}

function closeBulmaModal(id) {
    "use strict";
    document.getElementById(id).classList.remove('is-active');
}

function BulmaCardModal(id, title, content, footer) {
    "use strict";

    var bulmamodal =
    "<div class='modal' id='"+id+"'>" +
        "<div class='modal-background' onclick='closeBulmaModal(&quot;"+id+"&quot;)'></div>" +
        "<div class='modal-card'>" +
            "<header class='modal-card-head'>" +
                "<p class='modal-card-title'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i> " +
                title +
                "</p>" +
                "<button class='delete' aria-label='close' onclick='closeBulmaModal(&quot;"+id+"&quot;)'></button>" +
            "</header>" +
            "<section class='modal-card-body'>" +
                content +
            "</section>" +
            "<footer class='modal-card-foot'>" +
                footer +
            "</footer>" +
        "</div>" +
    "</div>";

    document.getElementById("TriggerBulmaCardModal").innerHTML = bulmamodal;
    openBulmaModal(id);
}

function BulmaImgModal(url) {
    "use strict";

    var bulmaimgmodal =
    "<div class='modal' id='imgmodal'><div class='modal-background' onclick='closeBulmaModal(&quot;imgmodal&quot;)'></div>" +
        "<div class='modal-content'>" +
            "<p class='bulma-img-modal-center'><img src='"+url+"'></p>" +
        "</div><button class='modal-close is-large' aria-label='close' onclick='closeBulmaModal(&quot;imgmodal&quot;)'></button>" +
    "</div>";

    document.getElementById("TriggerBulmaImgModal").innerHTML = bulmaimgmodal;
    openBulmaModal('imgmodal');
}

function trig(text) {
    console.log("trigger: " + text);
}
