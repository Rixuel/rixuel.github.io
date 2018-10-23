var textInput = "";
var textOutput = "";
var arrayInput = [];

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
}

function clearTextArea(id) {
	"use strict";
	document.getElementById(id).value = "";
}

function clearHash() {
	"use strict";
	document.getElementById("hash").innerHTML = "";
}

function sortRules(a, b) {
	// return -1 is swap to left, 0 unchanged, 1 swap to right
	//console.log("[1]: " + a + "\n");
	//console.log("[2]: " + b + "\n");

	if (a.toLowerCase() < b.toLowerCase()) {
		return -1;
	}

	if (a.toLowerCase() > b.toLowerCase()) {
		return 1;
	}

	return 0;
}

function inputStats() {
	"use strict";
	// Count new lines
	document.getElementById("numberOfLinesInput").innerHTML = textInput.split(/\r\n|\r|\n/).length;
	// Get Output length
	document.getElementById("outputLengthInput").innerHTML = textInput.length;
	// md5
	document.getElementById("md5Input").innerHTML = md5(textInput);
	// sha1
	document.getElementById("sha1Input").innerHTML = Sha1.hash(textInput);
}

function outputStats() {
	"use strict";
	// Count new lines
	document.getElementById("numberOfLines").innerHTML = textOutput.split(/\r\n|\r|\n/).length;
	// Get Output length
	document.getElementById("outputLength").innerHTML = textOutput.length;
	// md5
	document.getElementById("md5").innerHTML = md5(textOutput);
	// sha1
	document.getElementById("sha1").innerHTML = Sha1.hash(textOutput);
}

function ascOrderSort(id) {
	"use strict";
	document.getElementById("order").innerHTML = "Ascending";
	getTextInput();
	inputStats();
	// Put every line for every array index
	arrayInput = textInput.split('\n');
	// Ascending Sorting
	arrayInput.sort(sortRules);
	//console.log(arrayInput.sort(sortRules));
	textOutput = arrayInput.filter(v=>v!='').join("\n").toString();
	setTextOutput();
	outputStats();
}

function descOrderSort(id) {
	"use strict";
	document.getElementById("order").innerHTML = "Descending";
	getTextInput();
	inputStats();
	// Put every line for every array index
	arrayInput = textInput.split('\n');
	// Descending Sorting
	arrayInput.sort(sortRules).reverse();
	// console.log(arrayInput.sort(sortRules).reverse());
	textOutput = arrayInput.filter(v=>v!='').join("\n").toString();
	setTextOutput();
	outputStats();
}
