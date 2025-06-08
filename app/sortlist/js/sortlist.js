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

function naturalCompare(a, b) {
    var ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
    b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });

    while(ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if(nn) return nn;
    }

    return ax.length - bx.length;
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
	arrayInput.sort(naturalCompare);
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
	arrayInput.sort(naturalCompare).reverse();
	// console.log(arrayInput.sort(sortRules).reverse());
	textOutput = arrayInput.filter(v=>v!='').join("\n").toString();
	setTextOutput();
	outputStats();
}
