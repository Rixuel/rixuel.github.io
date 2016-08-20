var astrologyArr = [
    "<span><i class='ra ra-aquarius ra-2x'></i> Aquarius </span> ",
    "<span><i class='ra ra-aries ra-2x'></i> Aries </span> ",
    "<span><i class='ra ra-cancer ra-2x'></i> Cancer </span> ",
    "<span><i class='ra ra-capricorn ra-2x'></i> Capricorn </span> ",
    "<span><i class='ra ra-gemini ra-2x'></i> Gemini </span> ",
    "<span><i class='ra ra-libra ra-2x'></i> Libra </span> ",
    "<span><i class='ra ra-leo ra-2x'></i> Leo </span> ",
    "<span><i class='ra ra-pisces ra-2x'></i> Pisces </span> ",
    "<span><i class='ra ra-sagittarius ra-2x'></i> Sagittarius </span> ",
    "<span><i class='ra ra-scorpio ra-2x'></i> Scorpio </span> ",
    "<span><i class='ra ra-taurus ra-2x'></i> Taurus </span> ",
    "<span><i class='ra ra-virgo ra-2x'></i> Virgo </span> "
];

var creaturesArr = [
    "<span><i class='ra ra-dragon ra-2x'></i> Dragon </span> ",
    "<span><i class='ra ra-fox ra-2x'></i> Fox </span> ",
    "<span><i class='ra ra-gecko ra-2x'></i> Gecko </span> ",
    "<span><i class='ra ra-snake ra-2x'></i> Snake </span> ",
    "<span><i class='ra ra-wyvern ra-2x'></i> Wyvern </span> "
];

var ediblesArr = [
    "<span><i class='ra ra-cheese ra-2x'></i> Cheese </span> ",
    "<span><i class='ra ra-egg ra-2x'></i> Egg </span> ",
    "<span><i class='ra ra-honeycomb ra-2x'></i> Honeycomb </span> "
];

var envArr = [
    "<span><i class='ra ra-clover ra-2x'></i> Clover </span> ",
    "<span><i class='ra ra-flowers ra-2x'></i> Flowers </span> ",
    "<span><i class='ra ra-grass ra-2x'></i> Grass </span> "
];

function generator(array, amount, id) {
    "use strict";
    var index,
        result = "",
        arr = array,
        i;

    for (i = 0; i < amount; i += 1) {
        index = Math.floor(Math.random() * arr.length);
        result += arr[index];
    }

    document.getElementById(id).innerHTML = result;
}

function astrologyGen() {
    "use strict";
    generator(astrologyArr, 3, "astrology");
}

function creaturesGen() {
    "use strict";
    generator(creaturesArr, 10, "creatures");
}

function ediblesGen() {
    "use strict";
    generator(ediblesArr, 8, "edibles");
}

function envGen() {
    "use strict";
    generator(envArr, 4, "env");
}

function genAll() {
    "use strict";
    astrologyGen();
    creaturesGen();
    ediblesGen();
    envGen();
}