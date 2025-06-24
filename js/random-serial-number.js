let serialNum_Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let serialNum_LettersLength = serialNum_Letters.length;
let serialNum_Numbers = "0123456789";
let serialNum_NumbersLength = serialNum_Numbers.length;
let serialNum_Separator = "";

function generateSerialNum() {
    let serialNumString = "";
    
    serialNum_Separator = document.getElementById("serialNumSeparator").value;
    //console.log("Number of separators = " + serialNum_Separator)

    // With 1 separator, the output is XX00-X0X0
    if(serialNum_Separator >= 1){
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));
        serialNumString += "-";
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));

    }
    // With 2 separators, the output is XX00-X0X0-XXX0
    if(serialNum_Separator >= 2){
        serialNumString += "-";
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));
    }
    // With 3 separators, the output is XX00-X0X0-XXX0-000X
    if(serialNum_Separator >= 3){
        serialNumString += "-";
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
    }
    // With 4 separators, the output is XX00-X0X0-XXX0-000X-0X0X
    if(serialNum_Separator >= 4){
        serialNumString += "-";
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
        serialNumString += serialNum_Numbers.charAt(Math.floor(Math.random() * serialNum_NumbersLength));
        serialNumString += serialNum_Letters.charAt(Math.floor(Math.random() * serialNum_LettersLength));
    }

    //console.log("Generating: " + serialNumString);
    document.getElementById("useless-serial-number-output").value = serialNumString;
}

function onSelectSeparators() {
    let placeholderText = "";
    serialNum_Separator = document.getElementById("serialNumSeparator").value;

    if (serialNum_Separator == 1) {
        placeholderText = "XX00-X0X0";
    } else if (serialNum_Separator == 2) {
        placeholderText = "XX00-X0X0-XXX0";
    } else if (serialNum_Separator == 3) {
        placeholderText = "XX00-X0X0-XXX0-000X";
    } else if (serialNum_Separator == 4) {
        placeholderText = "XX00-X0X0-XXX0-000X-0X0X";
    }

    document.getElementById("useless-serial-number-output").placeholder = placeholderText;
}

function clearSerialNumOutput() {
    document.getElementById("useless-serial-number-output").value = "";
}

function copySelectAll(id) {
	let input = document.getElementById(id);
	input.select();
    //input.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(input.value);
}

/*
    sessionStorage. When we refresh or change page, our choices remains.
    Unless we close the tab or browser.
*/
const serialNumDropdowns = [
    {
        id: 'serialNumSeparator',
        key: 'selectedSerialNumSeparator'
    }
];

window.addEventListener('DOMContentLoaded', () => {
    serialNumDropdowns.forEach(({id,key}) => {
        const select = document.getElementById(id);
        if (!select) return; // Skip if the element doesn't exist

        // Load previous selections
        const savedValue = sessionStorage.getItem(key);
        if (savedValue) select.value = savedValue;

        // Save new selections
        select.addEventListener('change', () => {
            sessionStorage.setItem(key, select.value);
        });
    });
});