var textInput;
var textOutput;

function getTextInput() {
	"use strict";
	textInput = document.getElementById("input").value;
}

function setTextOutput() {
	"use strict";
	document.getElementById("output").innerHTML = textOutput;
}

// Use of the encrypt algo here.

function buttonAES() {
	"use strict";
	getTextInput();
	textOutput = AES.Base64.encode(textInput);
	setTextOutput();
}

function buttonDES() {
	"use strict";
	getTextInput();
	textOutput = stringToHex(textInput);
	setTextOutput();
}

function buttonMD5() {
	"use strict";
	getTextInput();
	textOutput = md5(textInput);
	setTextOutput();
}

function buttonRC4() {
	"use strict";
	getTextInput();
	textOutput = rc4("rixuel", textInput);
	setTextOutput();
}

function buttonSHA1() {
	"use strict";
	getTextInput();
	textOutput = Sha1.hash(textInput);
	setTextOutput();
}

// Use of the decrypt algo here.

function dAES() {
	"use strict";
	getTextInput();
	textOutput = AES.Base64.decode(textInput);
	setTextOutput();
}

function dDES() {
	"use strict";
	getTextInput();
	textOutput = hexToString(textInput);
	setTextOutput();
}

