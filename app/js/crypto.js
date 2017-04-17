var textInput = "";
var textOutput = "";

function getTextInput() {
	"use strict";
	textInput = document.getElementById("input").value;
}

function setTextOutput() {
	"use strict";
	document.getElementById("output").value = textOutput;
}

function copySelectAll(id) {
	"use strict";
	var input = document.getElementById(id);
	input.select();
	document.execCommand('copy');
}

function reset() {
	"use strict";
	// Clear values
	textInput = "";
	textOutput = "";
	// Clear both textarea
	document.getElementById("input").value = "";
	document.getElementById("output").value = "";
	document.getElementById("hash").innerHTML = "";
}

function clearTextArea(id) {
	"use strict";
	document.getElementById(id).value = "";
}

function clearHash() {
	"use strict";
	document.getElementById("hash").innerHTML = "";
}

function swap() {
	"use strict";
	getTextInput();
	// Swapping values
	var temp = textInput;
	textInput = textOutput;
	textOutput = temp;

	// Clear both textarea
	document.getElementById("input").value = "";
	document.getElementById("output").value = "";

	// Set new swapped values
	document.getElementById("input").value = textInput;
	document.getElementById("output").value = textOutput;
}

// Use of the encrypt algo here.

function buttonAES() {
	"use strict";
	getTextInput();
	textOutput = AES.Base64.encode(textInput);
	setTextOutput();
}

function buttonBase64() {
	"use strict";
	getTextInput();
	textOutput = Base64.encode(textInput);
	setTextOutput();
}

function buttonDES() {
	"use strict";
	getTextInput();
	textOutput = stringToHex(textInput);
	setTextOutput();
}

function buttonRC4() {
	"use strict";
	getTextInput();
	textOutput = rc4("rixuel", textInput);
	setTextOutput();
}

function buttonXOR() {
	"use strict";
	getTextInput();
	textOutput = xorCrypt(textInput);
	setTextOutput();
}

function buttonShift() {
	"use strict";
	getTextInput();
	textOutput = caesarShift(textInput, 1);
	setTextOutput();
}

// Hash Functions

function buttonMD5() {
	"use strict";
	getTextInput();
	//textOutput = md5(textInput);
	//setTextOutput();
	document.getElementById("hash").innerHTML = md5(textInput);
}

function buttonSHA1() {
	"use strict";
	getTextInput();
	//textOutput = Sha1.hash(textInput);
	//setTextOutput();
	document.getElementById("hash").innerHTML = Sha1.hash(textInput);
}

// Use of the decrypt algo here.

function dAES() {
	"use strict";
	getTextInput();
	textOutput = AES.Base64.decode(textInput);
	setTextOutput();
}

function dBase64() {
	"use strict";
	getTextInput();
	textOutput = Base64.decode(textInput);
	setTextOutput();
}

function dDES() {
	"use strict";
	getTextInput();
	textOutput = hexToString(textInput);
	setTextOutput();
}

function dShift() {
	"use strict";
	getTextInput();
	textOutput = caesarShift(textInput, -1);
	setTextOutput();
}
