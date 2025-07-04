const diceFace = {};
// Get all radio buttons
let selectedColor = "";

// Function to update dice icons
function updateDiceFaces(color) {
    for (let i = 1; i <= 6; i++) {
        diceFace[i] = `<i class="bi bi-dice-${i}-fill mx-1" style="font-size: 4rem; color: ${color};"></i>`;
    }
}

// On load
const selectedColorOnLoad = document.querySelector('input[name="dice-colors"]:checked');
if (selectedColorOnLoad) {
    selectedColor = selectedColorOnLoad.value;
    //console.log("Initial selected color:", selectedColor);
    updateDiceFaces(selectedColor);
}

// On change
document.querySelectorAll('input[name="dice-colors"]').forEach(radio => {
    radio.addEventListener('change', () => {
        selectedColor = document.querySelector('input[name="dice-colors"]:checked').value;
        //console.log("On change selected color:", selectedColor); // Logs updated value each time
        updateDiceFaces(selectedColor);
    });
});

let numberOfDice = 1;

function rollDice() {
    let diceOutput = "";
    // Converts the string to an integer
    numberOfDice = parseInt(document.getElementById("diceQuantity").value, 10);

    if (isNaN(numberOfDice) || numberOfDice < 1) {
        // If input is empty or is lower than 1
        numberOfDice = 1;
    } else if (numberOfDice > 10) {
        // If input is over 10
        numberOfDice = 10;
    }
    // Update the input
    document.getElementById("diceQuantity").value = numberOfDice;
    //console.log("numberOfDice: " + numberOfDice);

    for (let i=0; i<numberOfDice; i++) {
        diceOutput += diceFace[Math.floor(Math.random() * 6)+1];
    }

    document.getElementById("dice").innerHTML = diceOutput;
}

/*
    sessionStorage. When we refresh or change page, our choices remains.
    Unless we close the tab or browser.
*/
const diceInputs = [
    {
        id: 'diceQuantity',
        key: 'selectedDiceQuantity',
        type: 'number'
    },
    {
        name: 'dice-colors',
        key: 'selectedDiceColors',
        type: 'radio'
    }
];

window.addEventListener('DOMContentLoaded', () => {
    diceInputs.forEach(input => {
        if (input.type === 'radio') {
            // Handle radios by name
            const radios = document.querySelectorAll(`input[name="${input.name}"]`);
            const saved = sessionStorage.getItem(input.key);
            if (saved) {
                radios.forEach(radio => {
                    if (radio.value === saved) {
                        radio.checked = true;
                    }
                });
            }
            // Save new selections
            radios.forEach(radio => {
                radio.addEventListener('change', () => {
                    if (radio.checked) {
                        sessionStorage.setItem(input.key, radio.value);
                    }
                });
            });

        } else {
            // Handle select and number input by ID
            const el = document.getElementById(input.id);
            // Load previous selections
            const savedValue = sessionStorage.getItem(input.key);
            if (savedValue) el.value = savedValue;

            el.addEventListener('input', () => {
                sessionStorage.setItem(input.key, el.value);
            });
        }
    });
});
