(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var BlackNucleus = require("./json/HI3Valkyries/BZ/BlackNucleus.json");
var DimensionBreaker = require("./json/HI3Valkyries/BZ/DimensionBreaker.json");
var HerrscherOfReason = require("./json/HI3Valkyries/BZ/HerrscherOfReason.json");
var SnowySniper = require("./json/HI3Valkyries/BZ/SnowySniper.json");
var ValkyrieChariot = require("./json/HI3Valkyries/BZ/ValkyrieChariot.json");
var WolfsDawn = require("./json/HI3Valkyries/BZ/WolfsDawn.json");
var YamabukiArmor = require("./json/HI3Valkyries/BZ/YamabukiArmor.json");

var NightSquire = require("./json/HI3Valkyries/FH/NightSquire.json");
var Phoenix = require("./json/HI3Valkyries/FH/Phoenix.json");
var ShadowKnight = require("./json/HI3Valkyries/FH/ShadowKnight.json");
var ValkyrieAccipiter = require("./json/HI3Valkyries/FH/ValkyrieAccipiter.json");

var ImayohRitual = require("./json/HI3Valkyries/KA/ImayohRitual.json");
var SixthSerenade = require("./json/HI3Valkyries/KA/SixthSerenade.json");
var Sundenjager = require("./json/HI3Valkyries/KA/Sundenjager.json");

var DivinePrayer = require("./json/HI3Valkyries/KK/DivinePrayer.json");
var HerrscherOfTheVoid = require("./json/HI3Valkyries/KK/HerrscherOfTheVoid.json");
var KnightMoonbeam = require("./json/HI3Valkyries/KK/KnightMoonbeam.json");
var ValkyrieRanger = require("./json/HI3Valkyries/KK/ValkyrieRanger.json");
var WhiteComet = require("./json/HI3Valkyries/KK/WhiteComet.json");

var BlueberryBlitz = require("./json/HI3Valkyries/LO/BlueberryBlitz.json");

var ArcticKriegsmesser = require("./json/HI3Valkyries/MH/ArcticKriegsmesser.json");
var BattleStorm = require("./json/HI3Valkyries/MH/BattleStorm.json");
var BloodRose = require("./json/HI3Valkyries/MH/BloodRose.json");
var ScarletFusion = require("./json/HI3Valkyries/MH/ScarletFusion.json");
var ValkyrieTriumph = require("./json/HI3Valkyries/MH/ValkyrieTriumph.json");
var VermilionKnight = require("./json/HI3Valkyries/MH/VermilionKnight.json");

var CrimsonImpulse = require("./json/HI3Valkyries/RM/CrimsonImpulse.json");
var LightningEmpress = require("./json/HI3Valkyries/RM/LightningEmpress.json");
var ShadowDash = require("./json/HI3Valkyries/RM/ShadowDash.json");
var ValkyrieBladestrike = require("./json/HI3Valkyries/RM/ValkyrieBladestrike.json");

var MolotovCherry = require("./json/HI3Valkyries/RO/MolotovCherry.json");

var ArgentKnight = require("./json/HI3Valkyries/RR/ArgentKnight.json");
var PhantomIron = require("./json/HI3Valkyries/RR/PhantomIron.json");
var UmbralRose = require("./json/HI3Valkyries/RR/UmbralRose.json");

var StygianNymph = require("./json/HI3Valkyries/SV/StygianNymph.json");
var SwallowtailPhantasm = require("./json/HI3Valkyries/SV/SwallowtailPhantasm.json");

var CelestialHymn = require("./json/HI3Valkyries/TA/CelestialHymn.json");
var LunaKindred = require("./json/HI3Valkyries/TA/LunaKindred.json");
var SakunoRondo = require("./json/HI3Valkyries/TA/SakunoRondo.json");
var ValkyriePledge = require("./json/HI3Valkyries/TA/ValkyriePledge.json");
var VioletExecuter = require("./json/HI3Valkyries/TA/VioletExecuter.json");

var FlameSakitama = require("./json/HI3Valkyries/YS/FlameSakitama.json");
var GoushinnsoMemento = require("./json/HI3Valkyries/YS/GoushinnsoMemento.json");
var GyakushinnMiko = require("./json/HI3Valkyries/YS/GyakushinnMiko.json");

var Valkyries = [
    ArcticKriegsmesser,
    ArgentKnight,
    BattleStorm,
    BlackNucleus,
    BloodRose,
    BlueberryBlitz,
    CelestialHymn,
    CrimsonImpulse,
    DimensionBreaker,
    DivinePrayer,
    FlameSakitama,
    GoushinnsoMemento,
    GyakushinnMiko,
    HerrscherOfReason,
    HerrscherOfTheVoid,
    ImayohRitual,
    KnightMoonbeam,
    LightningEmpress,
    LunaKindred,
    MolotovCherry,
    NightSquire,
    PhantomIron,
    Phoenix,
    SakunoRondo,
    ScarletFusion,
    ShadowDash,
    ShadowKnight,
    SixthSerenade,
    SnowySniper,
    StygianNymph,
    Sundenjager,
    SwallowtailPhantasm,
    UmbralRose,
    ValkyrieAccipiter,
    ValkyrieBladestrike,
    ValkyrieChariot,
    ValkyriePledge,
    ValkyrieRanger,
    ValkyrieTriumph,
    VermilionKnight,
    VioletExecuter,
    WhiteComet,
    WolfsDawn,
    YamabukiArmor
];

var dataResult = "";
var acronymLength = "";
var costumeLength = "";
var fragdropinfoLength = "";

// Getting the search input
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function(){});
var searchValue = "";

// Adding "Enter" key shortcut for clickButton
var searchBarInput = document.getElementById("searchInput");
searchBarInput.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("clickButton").click();
	}
});

var ValkyrieLength = Valkyries.length;
console.log("ValkyrieLength: " + ValkyrieLength);

function getAcronyms(length, output, data, i) {
    for (var j=0; j<length; j++) {
        output += "[<b>" + data[i].acronym[j] + "</b>]";
        if (j<length-1) {
            output += " ";
        }
    }
    return output;
}

function getCostumes(length, output, data, i) {
    for (var j=0; j<length; j++) {
        output += "- " + data[i].costume[j];
        if (j<length-1) {
            output += "<br>";
        }
    }
    return output;
}

function getFragDropInfos(length, output, data, i) {
    for (var j=0; j<length; j++) {
        output += "- " + data[i].fragdropinfo[j];
        if (j<length-1) {
            output += "<br>";
        }
    }
    return output;
}

function templateInfo(data, i) {
    var dataResult = "";
    var acronyms = "";
    var costumes = "";
    var fragdropinfos = "";

    acronyms = getAcronyms(acronymLength, acronyms, Valkyries, i);
    costumes = getCostumes(costumeLength, costumes, Valkyries, i);
    fragdropinfos = getFragDropInfos(fragdropinfoLength, fragdropinfos, Valkyries, i);

    dataResult += "<div class='content'>";
        dataResult += "<h1>" + Valkyries[i].battlesuit + " (" + Valkyries[i].type + ")</h1>";
        dataResult += "<h2>" + Valkyries[i].firstname + " " + Valkyries[i].lastname + "</h2>";
        dataResult += "<p class='acronym'>" + acronyms + "</p>";
        dataResult += "<div class='columns'>";

            dataResult += "<div class='column is-half'>";
                dataResult += "<img class='valkpic' src='" + Valkyries[i].img + "'>";
            dataResult += "</div>";

            dataResult += "<div class='column is-half'>";
                dataResult += "<h4>Soul: <font color='#FFF'>" + Valkyries[i].soul + "</font></h4>";
                dataResult += "<h4>Birthday: <font color='#FFF'>" + Valkyries[i].birthday + "</font></h4>";
                dataResult += "<h4>Weapon: <font color='#FFF'>" + Valkyries[i].weapon + "</font></h4><br>";
                dataResult += "<h4>Costume (" + costumeLength + ") </h4>" + costumes + "<br><br>";
                dataResult += "<h4>Fragment Drop Info (" + fragdropinfoLength + ") </h4>" + fragdropinfos + "<br><br>";
            dataResult += "</div>";

        dataResult += "</div>";
    dataResult += "</div>";

    return dataResult;
}

function showResult() {
    var dataResult = "";
    searchValue = searchInput.value;
    console.log("searchValue: " + searchValue);

    for (var i=0; i<ValkyrieLength; i++) {
        acronymLength = Valkyries[i].acronym.length;
        costumeLength = Valkyries[i].costume.length;
        fragdropinfoLength = Valkyries[i].fragdropinfo.length;

        if (searchValue == "" || searchValue == " " || (searchValue.length < 2)) {
            // Do nothing
        } else if (Valkyries[i].battlesuit.toLowerCase() == searchValue.toLowerCase() ||
            Valkyries[i].battlesuit.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
            (Valkyries[i].firstname.toLowerCase() + " " + Valkyries[i].lastname.toLowerCase()).includes(searchValue.toLowerCase()) ||
            (Valkyries[i].lastname.toLowerCase() + " " + Valkyries[i].firstname.toLowerCase()).includes(searchValue.toLowerCase()) ||
            Valkyries[i].type.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].soul.toLowerCase() == searchValue.toLowerCase() ||
            Valkyries[i].weapon.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].acronym.map(function(x){return x.toLowerCase()}).includes(searchValue.toLowerCase())) {
            // Search one or multiple results
            dataResult += templateInfo(Valkyries, i)
        }
    }
    document.getElementById("output").innerHTML = dataResult;
}

function showAll() {
	var dataResult = "";
	for (var i=0, len=Valkyries.length; i<len; i++) {
        acronymLength = Valkyries[i].acronym.length;
        costumeLength = Valkyries[i].costume.length;
        fragdropinfoLength = Valkyries[i].fragdropinfo.length;
		dataResult += templateInfo(Valkyries, i);
	}
    document.getElementById("output").innerHTML = dataResult;
}


var button = document.getElementById("clickButton");
button.addEventListener("click", showResult);

var buttonShowAll = document.getElementById("clickShowAll");
buttonShowAll.addEventListener("click", showAll);

// browserify honkaimain.js -o js/honkaibundle.js

},{"./json/HI3Valkyries/BZ/BlackNucleus.json":2,"./json/HI3Valkyries/BZ/DimensionBreaker.json":3,"./json/HI3Valkyries/BZ/HerrscherOfReason.json":4,"./json/HI3Valkyries/BZ/SnowySniper.json":5,"./json/HI3Valkyries/BZ/ValkyrieChariot.json":6,"./json/HI3Valkyries/BZ/WolfsDawn.json":7,"./json/HI3Valkyries/BZ/YamabukiArmor.json":8,"./json/HI3Valkyries/FH/NightSquire.json":9,"./json/HI3Valkyries/FH/Phoenix.json":10,"./json/HI3Valkyries/FH/ShadowKnight.json":11,"./json/HI3Valkyries/FH/ValkyrieAccipiter.json":12,"./json/HI3Valkyries/KA/ImayohRitual.json":13,"./json/HI3Valkyries/KA/SixthSerenade.json":14,"./json/HI3Valkyries/KA/Sundenjager.json":15,"./json/HI3Valkyries/KK/DivinePrayer.json":16,"./json/HI3Valkyries/KK/HerrscherOfTheVoid.json":17,"./json/HI3Valkyries/KK/KnightMoonbeam.json":18,"./json/HI3Valkyries/KK/ValkyrieRanger.json":19,"./json/HI3Valkyries/KK/WhiteComet.json":20,"./json/HI3Valkyries/LO/BlueberryBlitz.json":21,"./json/HI3Valkyries/MH/ArcticKriegsmesser.json":22,"./json/HI3Valkyries/MH/BattleStorm.json":23,"./json/HI3Valkyries/MH/BloodRose.json":24,"./json/HI3Valkyries/MH/ScarletFusion.json":25,"./json/HI3Valkyries/MH/ValkyrieTriumph.json":26,"./json/HI3Valkyries/MH/VermilionKnight.json":27,"./json/HI3Valkyries/RM/CrimsonImpulse.json":28,"./json/HI3Valkyries/RM/LightningEmpress.json":29,"./json/HI3Valkyries/RM/ShadowDash.json":30,"./json/HI3Valkyries/RM/ValkyrieBladestrike.json":31,"./json/HI3Valkyries/RO/MolotovCherry.json":32,"./json/HI3Valkyries/RR/ArgentKnight.json":33,"./json/HI3Valkyries/RR/PhantomIron.json":34,"./json/HI3Valkyries/RR/UmbralRose.json":35,"./json/HI3Valkyries/SV/StygianNymph.json":36,"./json/HI3Valkyries/SV/SwallowtailPhantasm.json":37,"./json/HI3Valkyries/TA/CelestialHymn.json":38,"./json/HI3Valkyries/TA/LunaKindred.json":39,"./json/HI3Valkyries/TA/SakunoRondo.json":40,"./json/HI3Valkyries/TA/ValkyriePledge.json":41,"./json/HI3Valkyries/TA/VioletExecuter.json":42,"./json/HI3Valkyries/YS/FlameSakitama.json":43,"./json/HI3Valkyries/YS/GoushinnsoMemento.json":44,"./json/HI3Valkyries/YS/GyakushinnMiko.json":45}],2:[function(require,module,exports){
module.exports={
    "battlesuit": "Black Nucleus",
    "acronym": [
        "BN"
    ],
    "type": "Biologic",
    "soul": "Awakening",
    "firstname": "Bronya",
    "lastname": "Zaychik",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/5/59/Black_Nucleus.png/450px-Black_Nucleus.png",
    "birthday": "August 18th",
    "weapon": "Cannons",
    "costume": [
        "Black Nucleus"
    ],
    "fragdropinfo": [
    ]
}

},{}],3:[function(require,module,exports){
module.exports={
    "battlesuit": "Dimension Breaker",
    "acronym": [
        "DB"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Bronya",
    "lastname": "Zaychik",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/8/8e/Dimension_Breaker.png/450px-Dimension_Breaker.png",
    "birthday": "August 18th",
    "weapon": "Cannons",
    "costume": [
        "Dimension Breaker",
        "White Devil",
        "Techno Beats",
        "School Swimsuit"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],4:[function(require,module,exports){
module.exports={
    "battlesuit": "Herrscher of Reason",
    "acronym": [
        "HoR",
        "HR"
    ],
    "type": "Mecha",
    "soul": "Awakening",
    "firstname": "Bronya",
    "lastname": "Zaychik",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/0/0a/Herrscher_of_Reason.png/450px-Herrscher_of_Reason.png",
    "birthday": "August 18th",
    "weapon": "Cannons",
    "costume": [
        "DAE Raison"
    ],
    "fragdropinfo": [
    ]
}

},{}],5:[function(require,module,exports){
module.exports={
    "battlesuit": "Snowy Sniper",
    "acronym": [
        "SS"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Bronya",
    "lastname": "Zaychik",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/8/8a/Snowy_Sniper.png/450px-Snowy_Sniper.png",
    "birthday": "August 18th",
    "weapon": "Cannons",
    "costume": [
        "Snowy Sniper",
        "Carrot and Beet Soup",
        "Nightfall Witch",
        "School Swimsuit"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 2-9 (H)",
        "Story 2-9 (S)",
        "Story S3-8 (S)",
        "Story 6-2 (S)"
    ]
}

},{}],6:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Chariot",
    "acronym": [
        "VC"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Bronya",
    "lastname": "Zaychik",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/5/5a/Valkyrie_Chariot.png/450px-Valkyrie_Chariot.png",
    "birthday": "August 18th",
    "weapon": "Cannons",
    "costume": [
        "Valkyrie Chariot",
        "Blue Reunion",
        "Blue Sky",
        "School Swimsuit"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 1-9 (H)",
        "Story 2-20 (H)",
        "Story S4-13 (H)",
        "Story S3-9 (S)"
    ]
}

},{}],7:[function(require,module,exports){
module.exports={
    "battlesuit": "Wolf's Dawn",
    "acronym": [
        "WD"
    ],
    "type": "Psychic",
    "soul": "Awakening",
    "firstname": "Bronya",
    "lastname": "Zaychik",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/d/d1/Wolf%27s_Dawn.png/450px-Wolf%27s_Dawn.png",
    "birthday": "August 18th",
    "weapon": "Cannons",
    "costume": [
        "Wolf's Dawn",
        "Mercurial Hatter",
        "Midnight Blues"
    ],
    "fragdropinfo": [
        "Story 6-2 (H)",
        "Story 3-1 (S)",
        "Story 6-8 (S)"
    ]
}

},{}],8:[function(require,module,exports){
module.exports={
    "battlesuit": "Yamabuki Armor",
    "acronym": [
        "YA",
        "DK"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Bronya",
    "lastname": "Zaychik",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/9/99/Yamabuki_Armor.png/450px-Yamabuki_Armor.png",
    "birthday": "August 18th",
    "weapon": "Cannons",
    "costume": [
        "Yamabuki Armor",
        "Drive Kometa",
        "Throatwort",
        "Candy Demon",
        "School Swimsuit"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 1-18 (H)",
        "Story 3-15 (H)",
        "Story S4-14 (S)",
        "Story 6-4 (S)"
    ]
}

},{}],9:[function(require,module,exports){
module.exports={
    "battlesuit": "Night Squire",
    "acronym": [
        "NS"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Fu",
    "lastname": "Hua",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/1/12/Night_Squire.png/450px-Night_Squire.png",
    "birthday": "February 9th",
    "weapon": "Gauntlets",
    "costume": [
        "Night Squire",
        "Rustic Noir",
        "Spring Traveler"
    ],
    "fragdropinfo": [
        "Story 1-17 (H)",
        "Story 8-4 (H)",
        "Story 1-7 (S)",
        "Story 8-2 (S)",
        "Schicksal HQ - Adventure task"
    ]
}

},{}],10:[function(require,module,exports){
module.exports={
    "battlesuit": "Phoenix",
    "acronym": [
        "PX"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Fu",
    "lastname": "Hua",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/2/2a/Phoenix_%28Costume%29.png",
    "birthday": "February 9th",
    "weapon": "Gauntlets",
    "costume": [
        "Phoenix",
        "Fire and Sword",
        "Sword and Fire"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],11:[function(require,module,exports){
module.exports={
    "battlesuit": "Shadow Knight",
    "acronym": [
        "SK"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Fu",
    "lastname": "Hua",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4a/Shadow_Knight_%28Costume%29.png/586px-Shadow_Knight_%28Costume%29.png",
    "birthday": "February 9th",
    "weapon": "Gauntlets",
    "costume": [
        "Shadow Knight"
    ],
    "fragdropinfo": [
    ]
}

},{}],12:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Accipiter",
    "acronym": [
        "VA",
        "HotF",
        "HotY"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Fu",
    "lastname": "Hua",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/f/f7/Valkyrie_Accipiter.png/450px-Valkyrie_Accipiter.png",
    "birthday": "February 9th",
    "weapon": "Gauntlets",
    "costume": [
        "Valkyrie Accipiter",
        "Blue Swallow",
        "Hawk of the Fog",
        "Hawk of the Yard"
    ],
    "fragdropinfo": [
        "Story 1-13 (H)",
        "Story 3-18 (H)",
        "Story 2-2 (S)",
        "Story 7-2 (S)"
    ]
}

},{}],13:[function(require,module,exports){
module.exports={
    "battlesuit": "Imayoh Ritual",
    "acronym": [
        "IR"
    ],
    "type": "Mecha",
    "soul": "Awakening",
    "firstname": "Kallen",
    "lastname": "Kaslana",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/d/d4/Imayoh_Ritual.png/450px-Imayoh_Ritual.png",
    "birthday": "Unknown",
    "weapon": "Pistols",
    "costume": [
        "Imayoh Ritual",
        "Snow Fairy",
        "Blanc X: Kata"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure tasks",
        "Memorial Arena - Weekly Score Rewards",
        "Asterite Shop"
    ]
}

},{}],14:[function(require,module,exports){
module.exports={
    "battlesuit": "Sixth Serenade",
    "acronym": [
        "6S"
    ],
    "type": "Psychic",
    "soul": "Awakening",
    "firstname": "Kallen",
    "lastname": "Kaslana",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/6/63/Sixth_Serenade.png/450px-Sixth_Serenade.png",
    "birthday": "Unknown",
    "weapon": "Pistols",
    "costume": [
        "Sixth Serenade"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],15:[function(require,module,exports){
module.exports={
    "battlesuit": "Sundenjager",
    "acronym": [
        "SJ",
        "SH"
    ],
    "type": "Mecha",
    "soul": "Awakening",
    "firstname": "Kallen",
    "lastname": "Kaslana",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/5/55/Sundenjager.png/450px-Sundenjager.png",
    "birthday": "Unknown",
    "weapon": "Pistols",
    "costume": [
        "Sundenjager"
    ],
    "fragdropinfo": [
        "Open World: Adventure tasks",
        "Asterite Shop"
    ]
}

},{}],16:[function(require,module,exports){
module.exports={
    "battlesuit": "Divine Prayer",
    "acronym": [
        "DP"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Kiana",
    "lastname": "Kaslana",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/9/93/Divine_Prayer.png/450px-Divine_Prayer.png",
    "birthday": "December 7th",
    "weapon": "Pistols",
    "costume": [
        "Divine Prayer",
        "Winter Princess",
        "Lavender Love",
        "Sunny Beach"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 2-3 (H)",
        "Story 1-9 (S)",
        "Story 4-11 (S)"
    ]
}

},{}],17:[function(require,module,exports){
module.exports={
    "battlesuit": "Herrscher of the Void",
    "acronym": [
        "HotV",
        "HoV",
        "HV"
    ],
    "type": "Biologic",
    "soul": "Awakening",
    "firstname": "Kiana",
    "lastname": "Kaslana",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/2/29/Herrscher_of_the_Void.png/450px-Herrscher_of_the_Void.png",
    "birthday": "December 7th",
    "weapon": "Pistols",
    "costume": [
        "Herrscher of the Void",
        "Parasol Kaiserin"
    ],
    "fragdropinfo": [
    ]
}

},{}],18:[function(require,module,exports){
module.exports={
    "battlesuit": "Knight Moonbeam",
    "acronym": [
        "KMB"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Kiana",
    "lastname": "Kaslana",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/2/2d/Knight_Moonbeam.png/450px-Knight_Moonbeam.png",
    "birthday": "December 7th",
    "weapon": "Pistols",
    "costume": [
        "Knight Moonbeam",
        "Dark Devourer",
        "Sunny Beach"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],19:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Ranger",
    "acronym": [
        "VR",
        "VD"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Kiana",
    "lastname": "Kaslana",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/6/64/Valkyrie_Ranger.png/450px-Valkyrie_Ranger.png",
    "birthday": "December 7th",
    "weapon": "Pistols",
    "costume": [
        "Valkyrie Ranger",
        "Void Drifter",
        "Ocean Ranger",
        "Honkai World Diva",
        "Red Lictor",
        "Sunny Beach"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 1-11 (H)",
        "Story 3-3 (H)",
        "Story 4-12 (H)"
    ]
}

},{}],20:[function(require,module,exports){
module.exports={
    "battlesuit": "White Comet",
    "acronym": [
        "WC"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Kiana",
    "lastname": "Kaslana",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/6/63/White_Comet.png/926px-White_Comet.png",
    "birthday": "December 7th",
    "weapon": "Pistols",
    "costume": [
        "White Comet",
        "Starless Rift",
        "Prodigal Girl",
        "Sunny Beach"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 1-3 (H)",
        "Story 2-12 (H)",
        "Story S4-2 (H)",
        "Story S3-4 (S)"
    ]
}

},{}],21:[function(require,module,exports){
module.exports={
    "battlesuit": "Blueberry Blitz",
    "acronym": [
        "BB"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Liliya",
    "lastname": "Olenyeva",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4e/Blueberry_Blitz.png/450px-Blueberry_Blitz.png",
    "birthday": "Unknown",
    "weapon": "Greatswords",
    "costume": [
        "Blueberry Blitz",
        "Shelley's Beastliya"
    ],
    "fragdropinfo": [
        "Chronicles: Dreams of Gemina",
        "Stage 7-1 (H)",
        "Stage 11-5 (H)",
        "Stage 2-17 (S)",
        "Stage 11-7 (S)"
    ]
}

},{}],22:[function(require,module,exports){
module.exports={
    "battlesuit": "Artic Kriegsmesser",
    "acronym": [
        "AK"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Himeko",
    "lastname": "Murata",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/a/af/Arctic_Kriegsmesser.png/450px-Arctic_Kriegsmesser.png",
    "birthday": "June 11th",
    "weapon": "Greatswords",
    "costume": [
        "Artic Kriegsmesser",
        "Frisian Cutlass"
    ],
    "fragdropinfo": [
        "Asterite Shop"
    ]
}

},{}],23:[function(require,module,exports){
module.exports={
    "battlesuit": "Battle Storm",
    "acronym": [
        "BS"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Himeko",
    "lastname": "Murata",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/2/2b/Battle_Storm.png/450px-Battle_Storm.png",
    "birthday": "June 11th",
    "weapon": "Greatswords",
    "costume": [
        "Battle Storm",
        "Black Mamba"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 3-5 (H)",
        "Story 3-12 (H)",
        "Story S4-10 (H)",
        "Story S3-11 (S)"
    ]
}

},{}],24:[function(require,module,exports){
module.exports={
    "battlesuit": "Blood Rose",
    "acronym": [
        "BR"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Himeko",
    "lastname": "Murata",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4f/Blood_Rose.png/450px-Blood_Rose.png",
    "birthday": "June 11th",
    "weapon": "Greatswords",
    "costume": [
        "Blood Rose",
        "Rosy Passion",
        "Black Mamba"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],25:[function(require,module,exports){
module.exports={
    "battlesuit": "Scarlet Fusion",
    "acronym": [
        "SF"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Himeko",
    "lastname": "Murata",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/5/54/Scarlet_Fusion.png/450px-Scarlet_Fusion.png",
    "birthday": "June 11th",
    "weapon": "Greatswords",
    "costume": [
        "Scarlet Fusion",
        "Summer Party",
        "Origin",
        "Black Mamba"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 4-6 (H)",
        "Story 2-20 (S)",
        "Story 4-9 (S)",
        "Story 5-6 (S)"
    ]
}

},{}],26:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Triumph",
    "acronym": [
        "VT"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Himeko",
    "lastname": "Murata",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/0/02/Valkyrie_Triumph.png/450px-Valkyrie_Triumph.png",
    "birthday": "June 11th",
    "weapon": "Greatswords",
    "costume": [
        "Valkyrie Triumph",
        "Black Mamba"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 4-3 (H)",
        "Story 4-19 (H)",
        "Story 7-2 (H)",
        "Story 4-19 (S)"
    ]
}

},{}],27:[function(require,module,exports){
module.exports={
    "battlesuit": "Vermilion Knight",
    "acronym": [
        "VK"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Himeko",
    "lastname": "Murata",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4c/Vermilion_Knight_-_Eclipse.png/450px-Vermilion_Knight_-_Eclipse.png",
    "birthday": "June 11th",
    "weapon": "Greatswords",
    "costume": [
        "Vermilion Knight: Eclipse",
        "Vernal Brocade"
    ],
    "fragdropinfo": [
    ]
}

},{}],28:[function(require,module,exports){
module.exports={
    "battlesuit": "Crimson Impulse",
    "acronym": [
        "CI"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Mei",
    "lastname": "Raiden",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/c/c6/Crimson_Impulse.png/450px-Crimson_Impulse.png",
    "birthday": "April 13th",
    "weapon": "Katanas",
    "costume": [
        "Crimson Impulse",
        "Gardenia",
        "Vast Ocean"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 1-6 (H)",
        "Story 2-16 (H)",
        "Story S4-7 (H)",
        "Story 3-9 (S)"
    ]
}

},{}],29:[function(require,module,exports){
module.exports={
    "battlesuit": "Lightning Empress",
    "acronym": [
        "LE"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Mei",
    "lastname": "Raiden",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4d/Lightning_Empress.png/450px-Lightning_Empress.png",
    "birthday": "April 13th",
    "weapon": "Katanas",
    "costume": [
        "Lightning Empress",
        "Scorching Golden Thunder",
        "Aqua Chime",
        "Eventide Phantom",
        "Ultramarine Octave",
        "Vast Ocean"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],30:[function(require,module,exports){
module.exports={
    "battlesuit": "Shadow Dash",
    "acronym": [
        "SD"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Mei",
    "lastname": "Raiden",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/9/92/Shadow_Dash.png/450px-Shadow_Dash.png",
    "birthday": "April 13th",
    "weapon": "Katanas",
    "costume": [
        "Shadow Dash",
        "Soul Symphony",
        "Hind of Noel",
        "Vast Ocean"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 2-6 (H)",
        "Story 4-15 (H)",
        "Story 1-18 (S)",
        "Story 5-2 (S)"
    ]
}

},{}],31:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Bladestrike",
    "acronym": [
        "VB",
        "VBS",
        "Ful"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Mei",
    "lastname": "Raiden",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/c/ca/Striker_Fulminata.png",
    "birthday": "April 13th",
    "weapon": "Katanas",
    "costume": [
        "Valkyrie Bladestrike",
        "Striker Fulminata",
        "Blue Memories",
        "Aeterna Purum",
        "Vast Ocean"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 1-15 (H)",
        "Story 3-9 (H)",
        "Story 4-13 (S)",
        "Story 6-6 (S)"
    ]
}

},{}],32:[function(require,module,exports){
module.exports={
    "battlesuit": "Molotov Cherry",
    "acronym": [
        "MC"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Rozaliya",
    "lastname": "Olenyeva",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/be/Molotov_Cherry.png/450px-Molotov_Cherry.png",
    "birthday": "Unknown",
    "weapon": "Greatswords",
    "costume": [
        "Molotov Cherry",
        "Gothic Rozamary"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],33:[function(require,module,exports){
module.exports={
    "battlesuit": "Argent Knight",
    "acronym": [
        "AKA",
        "ArK",
        "Rice"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Rita",
    "lastname": "Rossweisse",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/1/1e/Argent_Knight_-_Artemis.png",
    "birthday": "March 1st",
    "weapon": "Scythes",
    "costume": [
        "Argent Knight: Artemis",
        "Maid of Celestia",
        "Vow of Roses"
    ],
    "fragdropinfo": [
    ]
}

},{}],34:[function(require,module,exports){
module.exports={
    "battlesuit": "Phantom Iron",
    "acronym": [
        "PI"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Rita",
    "lastname": "Rossweisse",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/6/61/Phantom_Iron.png/450px-Phantom_Iron.png",
    "birthday": "March 1st",
    "weapon": "Scythes",
    "costume": [
        "Phantom Iron",
        "Icy Sea Spray"
    ],
    "fragdropinfo": [
        "Story 3-7 (H)",
        "Story 4-5 (S)",
        "Story IX-1-2 (H)",
        "Story IX-1-4 (S)"
    ]
}

},{}],35:[function(require,module,exports){
module.exports={
    "battlesuit": "Umbral Rose",
    "acronym": [
        "UR"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Rita",
    "lastname": "Rossweisse",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/8/8a/Umbral_Rose.png/450px-Umbral_Rose.png",
    "birthday": "March 1st",
    "weapon": "Scythes",
    "costume": [
        "Umbral Rose",
        "Dame de Coeur",
        "Dusky Murmurs"
    ],
    "fragdropinfo": [
        "Story 2-11 (H)",
        "Story 3-4 (S)",
        "Story 9-10 (H)",
        "Story 9-4 (S)"
    ]
}

},{}],36:[function(require,module,exports){
module.exports={
    "battlesuit": "Stygian Nymph",
    "acronym": [
        "SN"
    ],
    "type": "Quantum",
    "soul": "Original",
    "firstname": "Seele",
    "lastname": "Vollerei",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/1/13/Stygian_Nymph.png/450px-Stygian_Nymph.png",
    "birthday": "October 18th",
    "weapon": "Scythes",
    "costume": [
        "Stygian Nymph"
    ],
    "fragdropinfo": [
    ]
}

},{}],37:[function(require,module,exports){
module.exports={
    "battlesuit": "Swallowtail Phantasm",
    "acronym": [
        "SP"
    ],
    "type": "Quantum",
    "soul": "Original",
    "firstname": "Seele",
    "lastname": "Vollerei",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/e/e0/Swallowtail_Phantasm.png/450px-Swallowtail_Phantasm.png",
    "birthday": "October 18th",
    "weapon": "Scythes",
    "costume": [
        "Swallowtail Phantasm",
        "Azure Memories",
        "Papilio Lily"
    ],
    "fragdropinfo": [
        "Stage 4-10 (H)",
        "Stage XI-1-2 (H)",
        "Stage 6-5 (S)",
        "Stage XI-1-1 (S)",
    ]
}

},{}],38:[function(require,module,exports){
module.exports={
    "battlesuit": "Celestial Hymn",
    "acronym": [
        "CH"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Theresa",
    "lastname": "Apocalypse",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/bb/Celestial_Hymn.png/450px-Celestial_Hymn.png",
    "birthday": "March 28th",
    "weapon": "Crosses",
    "costume": [
        "Celestial Hymn",
        "Starry Night",
        "Grand Sage"
    ],
    "fragdropinfo": [
    ]
}

},{}],39:[function(require,module,exports){
module.exports={
    "battlesuit": "Luna Kindred",
    "acronym": [
        "LK"
    ],
    "type": "Biologic",
    "soul": "Awakening",
    "firstname": "Theresa",
    "lastname": "Apocalypse",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/b4/Luna_Kindred.png/450px-Luna_Kindred.png",
    "birthday": "March 28th",
    "weapon": "Crosses",
    "costume": [
        "Sakuno Rondo",
        "Rosy Bridesmaid"
    ],
    "fragdropinfo": [
        "Asterite Shop",
        "Schicksal HQ adventure tasks rating reward"
    ]
}

},{}],40:[function(require,module,exports){
module.exports={
    "battlesuit": "Sakuno Rondo",
    "acronym": [
        "SR"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Theresa",
    "lastname": "Apocalypse",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/f/fa/Sakuno_Rondo.png/450px-Sakuno_Rondo.png",
    "birthday": "March 28th",
    "weapon": "Crosses",
    "costume": [
        "Sakuno Rondo",
        "Lilac of the Valley",
        "Magical Teriri",
        "Morning Sunshine"
    ],
    "fragdropinfo": [
        "Story 5-8 (H)",
        "Story 6-6 (H)",
        "Story 5-8 (S)"
    ]
}

},{}],41:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Pledge",
    "acronym": [
        "VP"
    ],
    "type": "Psychic",
    "soul": "Original",
    "firstname": "Theresa",
    "lastname": "Apocalypse",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/a/a4/Valkyrie_Pledge.png/450px-Valkyrie_Pledge.png",
    "birthday": "March 28th",
    "weapon": "Crosses",
    "costume": [
        "Valkyrie Pledge",
        "Shallow Sunset",
        "Pledge",
        "Campus Detective",
        "Ouranon's Forgiveness",
        "Sugar Haw Child",
        "Morning Sunshine"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Story 4-9 (H)",
        "Story 5-5 (H)",
        "Story 3-16 (S)",
        "Story 5-4 (S)"
    ]
}

},{}],42:[function(require,module,exports){
module.exports={
    "battlesuit": "Violet Executer",
    "acronym": [
        "VE",
        "TP"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Theresa",
    "lastname": "Apocalypse",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/7/7b/Violet_Executer.png/450px-Violet_Executer.png",
    "birthday": "March 28th",
    "weapon": "Crosses",
    "costume": [
        "Violet Executer",
        "Blood Knight: Moonlight",
        "Wonderland Trek",
        "Twilight Paladin",
        "Morning Sunshine"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],43:[function(require,module,exports){
module.exports={
    "battlesuit": "Flame Sakitama",
    "acronym": [
        "FS"
    ],
    "type": "Biologic",
    "soul": "Awakening",
    "firstname": "Sakura",
    "lastname": "Yae",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/f/f5/Flame_Sakitama_%28Costume%29.png",
    "birthday": "July 22th",
    "weapon": "Katanas",
    "costume": [
        "Flame Sakitama",
        "Dream Raiment"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Asterite Shop"
    ]
}

},{}],44:[function(require,module,exports){
module.exports={
    "battlesuit": "Goushinnso Memento",
    "acronym": [
        "Meme"
    ],
    "type": "Mecha",
    "soul": "Awakening",
    "firstname": "Sakura",
    "lastname": "Yae",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/9/95/Goushinnso_Memento.png/450px-Goushinnso_Memento.png",
    "birthday": "July 22th",
    "weapon": "Katanas",
    "costume": [
        "Goushinnso Memento",
        "Blanc X: Ichijin",
        "Summer Dream"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],45:[function(require,module,exports){
module.exports={
    "battlesuit": "Gyakushinn Miko",
    "acronym": [
        "Miko"
    ],
    "type": "Biologic",
    "soul": "Awakening",
    "firstname": "Sakura",
    "lastname": "Yae",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/b5/Gyakushinn_Miko.png/450px-Gyakushinn_Miko.png",
    "birthday": "July 22th",
    "weapon": "Katanas",
    "costume": [
        "Gyakushinn Miko",
        "Summer Sakura",
        "Midnight Marigold",
        "Frozen Sakura",
        "Sublime Lotus",
        "Summer Dream"
    ],
    "fragdropinfo": [
        "Sakura Samsara: Adventure Tasks",
        "Sakura Samsara - Adventure Tasks - Finalization Reward",
        "Asterite Shop"
    ]
}

},{}]},{},[1]);
