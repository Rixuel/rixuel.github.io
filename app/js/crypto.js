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

function reset() {
	"use strict";
	// Clear values
	textInput = "";
	textOutput = "";
	// Clear both textarea
	document.getElementById("input").value = "";
	document.getElementById("output").value = "";
}

function clearOutput() {
	"use strict";
	textOutput = "";
	document.getElementById("output").value = "";
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

