(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var BrightKnightExcelsis = require("../json/HI3Valkyries/BA/BrightKnightExcelsis.json");
var DeaAnchora = require("../json/HI3Valkyries/BA/DeaAnchora.json");
var ValkyrieGloria = require("../json/HI3Valkyries/BA/ValkyrieGloria.json");

var BlackNucleus = require("../json/HI3Valkyries/BZ/BlackNucleus.json");
var DimensionBreaker = require("../json/HI3Valkyries/BZ/DimensionBreaker.json");
var HerrscherOfReason = require("../json/HI3Valkyries/BZ/HerrscherOfReason.json");
var SnowySniper = require("../json/HI3Valkyries/BZ/SnowySniper.json");
var ValkyrieChariot = require("../json/HI3Valkyries/BZ/ValkyrieChariot.json");
var WolfsDawn = require("../json/HI3Valkyries/BZ/WolfsDawn.json");
var YamabukiArmor = require("../json/HI3Valkyries/BZ/YamabukiArmor.json");

var AzureEmpyrea = require("../json/HI3Valkyries/FH/AzureEmpyrea.json");
var NightSquire = require("../json/HI3Valkyries/FH/NightSquire.json");
var Phoenix = require("../json/HI3Valkyries/FH/Phoenix.json");
var ShadowKnight = require("../json/HI3Valkyries/FH/ShadowKnight.json");
var ValkyrieAccipiter = require("../json/HI3Valkyries/FH/ValkyrieAccipiter.json");

var ImayohRitual = require("../json/HI3Valkyries/KA/ImayohRitual.json");
var SixthSerenade = require("../json/HI3Valkyries/KA/SixthSerenade.json");
var Sundenjager = require("../json/HI3Valkyries/KA/Sundenjager.json");

var DivinePrayer = require("../json/HI3Valkyries/KK/DivinePrayer.json");
var HerrscherOfTheVoid = require("../json/HI3Valkyries/KK/HerrscherOfTheVoid.json");
var KnightMoonbeam = require("../json/HI3Valkyries/KK/KnightMoonbeam.json");
var ValkyrieRanger = require("../json/HI3Valkyries/KK/ValkyrieRanger.json");
var WhiteComet = require("../json/HI3Valkyries/KK/WhiteComet.json");

var BlueberryBlitz = require("../json/HI3Valkyries/LO/BlueberryBlitz.json");

var ArcticKriegsmesser = require("../json/HI3Valkyries/MH/ArcticKriegsmesser.json");
var BattleStorm = require("../json/HI3Valkyries/MH/BattleStorm.json");
var BloodRose = require("../json/HI3Valkyries/MH/BloodRose.json");
var ScarletFusion = require("../json/HI3Valkyries/MH/ScarletFusion.json");
var ValkyrieTriumph = require("../json/HI3Valkyries/MH/ValkyrieTriumph.json");
var VermilionKnight = require("../json/HI3Valkyries/MH/VermilionKnight.json");

var CrimsonImpulse = require("../json/HI3Valkyries/RM/CrimsonImpulse.json");
var HerrscherOfThunder = require("../json/HI3Valkyries/RM/HerrscherOfThunder.json");
var LightningEmpress = require("../json/HI3Valkyries/RM/LightningEmpress.json");
var ShadowDash = require("../json/HI3Valkyries/RM/ShadowDash.json");
var ValkyrieBladestrike = require("../json/HI3Valkyries/RM/ValkyrieBladestrike.json");

var MolotovCherry = require("../json/HI3Valkyries/RO/MolotovCherry.json");

var ArgentKnight = require("../json/HI3Valkyries/RR/ArgentKnight.json");
var FallenRosemary = require("../json/HI3Valkyries/RR/FallenRosemary.json");
var PhantomIron = require("../json/HI3Valkyries/RR/PhantomIron.json");
var UmbralRose = require("../json/HI3Valkyries/RR/UmbralRose.json");

var StygianNymph = require("../json/HI3Valkyries/SV/StygianNymph.json");
var SwallowtailPhantasm = require("../json/HI3Valkyries/SV/SwallowtailPhantasm.json");

var CelestialHymn = require("../json/HI3Valkyries/TA/CelestialHymn.json");
var LunaKindred = require("../json/HI3Valkyries/TA/LunaKindred.json");
var SakunoRondo = require("../json/HI3Valkyries/TA/SakunoRondo.json");
var StarlitAstrologos = require("../json/HI3Valkyries/TA/StarlitAstrologos.json");
var ValkyriePledge = require("../json/HI3Valkyries/TA/ValkyriePledge.json");
var VioletExecuter = require("../json/HI3Valkyries/TA/VioletExecuter.json");

var DarkBoltJonin = require("../json/HI3Valkyries/YS/DarkBoltJonin.json");
var FlameSakitama = require("../json/HI3Valkyries/YS/FlameSakitama.json");
var GoushinnsoMemento = require("../json/HI3Valkyries/YS/GoushinnsoMemento.json");
var GyakushinnMiko = require("../json/HI3Valkyries/YS/GyakushinnMiko.json");

var Valkyries = [
    ArcticKriegsmesser,
    ArgentKnight,
    AzureEmpyrea,
    BattleStorm,
    BlackNucleus,
    BloodRose,
    BlueberryBlitz,
    BrightKnightExcelsis,
    CelestialHymn,
    CrimsonImpulse,
    DarkBoltJonin,
    DeaAnchora,
    DimensionBreaker,
    DivinePrayer,
    FallenRosemary,
    FlameSakitama,
    GoushinnsoMemento,
    GyakushinnMiko,
    HerrscherOfReason,
    HerrscherOfTheVoid,
    HerrscherOfThunder,
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
    StarlitAstrologos,
    StygianNymph,
    Sundenjager,
    SwallowtailPhantasm,
    UmbralRose,
    ValkyrieAccipiter,
    ValkyrieBladestrike,
    ValkyrieChariot,
    ValkyrieGloria,
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
var tagLength = "";
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

function getTags(length, output, data, i) {
    for (var j=0; j<length; j++) {
        output += "[<b>" + data[i].tag[j] + "</b>]";
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

function howTo() {
    var howToTemplate = "";
    howToTemplate += "<div class='content'>";
        howToTemplate += "<div class='columns'>";
            howToTemplate += "<div class='column'>";
                howToTemplate += "<h1>How to use?</h1>";
                howToTemplate += "This guide shows you how to use the search function.<br>";
                howToTemplate += "<h2>You can search by...</h2>";
                howToTemplate += "<b><u>First Name</u></b> (ex: Kiana)<br>";
                howToTemplate += "<b><u>Last Name</u></b> (ex: Kaslana)<br>";
                howToTemplate += "<b><u>First & Last Names</u></b> (ex: Kiana Kaslana)<br>";
                howToTemplate += "<b><u>Last & First Names</u></b> (ex: Kaslana Kiana)<br>";
                howToTemplate += "<b><u>Battlesuit</u></b> (ex: Celestial Hymn)<br>";
                howToTemplate += "<b><u>Type</u></b> (ex: Mecha, Biologic, Psychic, Quantum)<br>";
                howToTemplate += "<b><u>Soul</u></b> (ex: Original, Awakening)<br>";
                howToTemplate += "<b><u>Weapon</u></b> (ex: Cannons, Crosses, Gauntlets, Greatswords, Katanas, Lances, Pistols, Scythes)<br>";
                howToTemplate += "<b><u>Tag</u></b> (ex: AK, AE, ... [Check the next section about Tag])<br>";
                howToTemplate += "<h2>Searching with a Tag accurately</h2>";
                howToTemplate += "Sometime, searching with an tag might cause some inaccuracy.<br>";
                howToTemplate += "Use <b>square brackets</b> with the tag in it to get accurated result.<br>";
                howToTemplate += "ex: [AK], [AE], [HoR], [Tuna], ...<br>";
                howToTemplate += "<h2>Lowercase or Uppercase?</h2>";
                howToTemplate += "It doesn't matter. The search function understands Kiana, kiana, or KiAnA inputs. <br>";
                howToTemplate += "<h2>How to show all Valkyries?</h2>";
                howToTemplate += "This function might slow down your computer or consume your bandwidth (because of loading pictures).<br>";
                howToTemplate += "In the search bar, type: <b>[showAll]</b><br>";
                howToTemplate += "<h2>How to empty the result</h2>";
                howToTemplate += "Leave the search bar empty (or enter invalid inputs).</b><br>";
            howToTemplate += "</div>";
        howToTemplate += "</div>";
    howToTemplate += "</div>";

    document.getElementById("output").innerHTML = howToTemplate;
}

function templateInfo(data, i) {
    var dataResult = "";
    var tags = "";
    var costumes = "";
    var fragdropinfos = "";

    tags = getTags(tagLength, tags, Valkyries, i);
    costumes = getCostumes(costumeLength, costumes, Valkyries, i);
    fragdropinfos = getFragDropInfos(fragdropinfoLength, fragdropinfos, Valkyries, i);

    dataResult += "<div class='content'>";
        dataResult += "<div class='columns'>";
            dataResult += "<div class='column is-11'>";
                dataResult += "<h1>" + Valkyries[i].battlesuit + "</h1>";
                dataResult += "<h2>" + Valkyries[i].firstname + " " + Valkyries[i].lastname + "</h2>";
                dataResult += "<p class='tagList'>" + tags + "</p>";
            dataResult += "</div>";

            dataResult += "<div class='column'>";
                if (Valkyries[i].type == "Mecha") {
                    dataResult += "<img class='typeimg' src='img/MECH.png' title='" + Valkyries[i].type + "'>";
                } else if (Valkyries[i].type == "Biologic") {
                    dataResult += "<img class='typeimg' src='img/BIO.png' title='" + Valkyries[i].type + "'>";
                } else if (Valkyries[i].type == "Psychic") {
                    dataResult += "<img class='typeimg' src='img/PSY.png' title='" + Valkyries[i].type + "'>";
                } else if (Valkyries[i].type == "Quantum") {
                    dataResult += "<img class='typeimg' src='img/QUA.png' title='" + Valkyries[i].type + "'>";
                }
            dataResult += "</div>";
        dataResult += "</div>";

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
    var showAllStr = "[showAll]";
    //console.log("searchValue: " + searchValue);

    for (var i=0; i<ValkyrieLength; i++) {
        tagLength = Valkyries[i].tag.length;
        costumeLength = Valkyries[i].costume.length;
        fragdropinfoLength = Valkyries[i].fragdropinfo.length;

        if (searchValue == "" || searchValue == " " || (searchValue.length < 2)) {
            // Do nothing
        } else if (showAllStr.toLowerCase().includes(searchValue.toLowerCase())) {
            // A specific command to show all Valkyries
            var dataResult = "";
        	for (var i=0, len=Valkyries.length; i<len; i++) {
                tagLength = Valkyries[i].tag.length;
                costumeLength = Valkyries[i].costume.length;
                fragdropinfoLength = Valkyries[i].fragdropinfo.length;
        		dataResult += templateInfo(Valkyries, i);
        	}
            document.getElementById("output").innerHTML = dataResult;

        } else if (Valkyries[i].battlesuit.toLowerCase() == searchValue.toLowerCase() ||
            Valkyries[i].battlesuit.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
            (Valkyries[i].firstname.toLowerCase() + " " + Valkyries[i].lastname.toLowerCase()).includes(searchValue.toLowerCase()) ||
            (Valkyries[i].lastname.toLowerCase() + " " + Valkyries[i].firstname.toLowerCase()).includes(searchValue.toLowerCase()) ||
            Valkyries[i].type.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].soul.toLowerCase() == searchValue.toLowerCase() ||
            Valkyries[i].weapon.toLowerCase().includes(searchValue.toLowerCase()) ||
            Valkyries[i].tag.map(function(x){return x.toLowerCase()}).includes(searchValue.toLowerCase()) ||
            Valkyries[i].tag.map(function(x){return "["+x.toLowerCase()+"]"}).includes(searchValue.toLowerCase())) {
            // Search one or multiple results
            dataResult += templateInfo(Valkyries, i)
        }
    }
    document.getElementById("output").innerHTML = dataResult;
}

var button = document.getElementById("clickButton");
button.addEventListener("click", showResult);

var buttonHowTo = document.getElementById("clickHowTo");
buttonHowTo.addEventListener("click", howTo);

// browserify js/honkaimain.js -o js/honkaibundle.js

},{"../json/HI3Valkyries/BA/BrightKnightExcelsis.json":2,"../json/HI3Valkyries/BA/DeaAnchora.json":3,"../json/HI3Valkyries/BA/ValkyrieGloria.json":4,"../json/HI3Valkyries/BZ/BlackNucleus.json":5,"../json/HI3Valkyries/BZ/DimensionBreaker.json":6,"../json/HI3Valkyries/BZ/HerrscherOfReason.json":7,"../json/HI3Valkyries/BZ/SnowySniper.json":8,"../json/HI3Valkyries/BZ/ValkyrieChariot.json":9,"../json/HI3Valkyries/BZ/WolfsDawn.json":10,"../json/HI3Valkyries/BZ/YamabukiArmor.json":11,"../json/HI3Valkyries/FH/AzureEmpyrea.json":12,"../json/HI3Valkyries/FH/NightSquire.json":13,"../json/HI3Valkyries/FH/Phoenix.json":14,"../json/HI3Valkyries/FH/ShadowKnight.json":15,"../json/HI3Valkyries/FH/ValkyrieAccipiter.json":16,"../json/HI3Valkyries/KA/ImayohRitual.json":17,"../json/HI3Valkyries/KA/SixthSerenade.json":18,"../json/HI3Valkyries/KA/Sundenjager.json":19,"../json/HI3Valkyries/KK/DivinePrayer.json":20,"../json/HI3Valkyries/KK/HerrscherOfTheVoid.json":21,"../json/HI3Valkyries/KK/KnightMoonbeam.json":22,"../json/HI3Valkyries/KK/ValkyrieRanger.json":23,"../json/HI3Valkyries/KK/WhiteComet.json":24,"../json/HI3Valkyries/LO/BlueberryBlitz.json":25,"../json/HI3Valkyries/MH/ArcticKriegsmesser.json":26,"../json/HI3Valkyries/MH/BattleStorm.json":27,"../json/HI3Valkyries/MH/BloodRose.json":28,"../json/HI3Valkyries/MH/ScarletFusion.json":29,"../json/HI3Valkyries/MH/ValkyrieTriumph.json":30,"../json/HI3Valkyries/MH/VermilionKnight.json":31,"../json/HI3Valkyries/RM/CrimsonImpulse.json":32,"../json/HI3Valkyries/RM/HerrscherOfThunder.json":33,"../json/HI3Valkyries/RM/LightningEmpress.json":34,"../json/HI3Valkyries/RM/ShadowDash.json":35,"../json/HI3Valkyries/RM/ValkyrieBladestrike.json":36,"../json/HI3Valkyries/RO/MolotovCherry.json":37,"../json/HI3Valkyries/RR/ArgentKnight.json":38,"../json/HI3Valkyries/RR/FallenRosemary.json":39,"../json/HI3Valkyries/RR/PhantomIron.json":40,"../json/HI3Valkyries/RR/UmbralRose.json":41,"../json/HI3Valkyries/SV/StygianNymph.json":42,"../json/HI3Valkyries/SV/SwallowtailPhantasm.json":43,"../json/HI3Valkyries/TA/CelestialHymn.json":44,"../json/HI3Valkyries/TA/LunaKindred.json":45,"../json/HI3Valkyries/TA/SakunoRondo.json":46,"../json/HI3Valkyries/TA/StarlitAstrologos.json":47,"../json/HI3Valkyries/TA/ValkyriePledge.json":48,"../json/HI3Valkyries/TA/VioletExecuter.json":49,"../json/HI3Valkyries/YS/DarkBoltJonin.json":50,"../json/HI3Valkyries/YS/FlameSakitama.json":51,"../json/HI3Valkyries/YS/GoushinnsoMemento.json":52,"../json/HI3Valkyries/YS/GyakushinnMiko.json":53}],2:[function(require,module,exports){
module.exports={
    "battlesuit": "Bright Knight Excelsis",
    "tag": [
        "BKE",
        "DuDu",
        "DooDoo"
    ],
    "type": "Mecha",
    "soul": "Original",
    "firstname": "Bianka",
    "lastname": "Ataegina",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/5/5c/Bright_Knight_-_Excelsis.png",
    "birthday": "Jan 1st (according to Schicksal)",
    "weapon": "Lances",
    "costume": [
        "Bright Knight: Excelsis"
    ],
    "fragdropinfo": [
    ]
}

},{}],3:[function(require,module,exports){
module.exports={
    "battlesuit": "Dea Anchora",
    "tag": [
        "DA",
        "DuDu",
        "DooDoo"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Bianka",
    "lastname": "Ataegina",
    "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20201216/2020121616452893349.png",
    "birthday": "Jan 1st (according to Schicksal)",
    "weapon": "Lances",
    "costume": [
        "Dea Anchora"
    ],
    "fragdropinfo": [
    ]
}

},{}],4:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Gloria",
    "tag": [
        "VG",
        "DuDu",
        "DooDoo"
    ],
    "type": "Quantum",
    "soul": "Original",
    "firstname": "Bianka",
    "lastname": "Ataegina",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/3/37/Valkyrie_Gloria.png/936px-Valkyrie_Gloria.png",
    "birthday": "Jan 1st (according to Schicksal)",
    "weapon": "Lances",
    "costume": [
        "Valkyrie Gloria",
        "Lord Paramount",
        "Purrfect Holiday"
    ],
    "fragdropinfo": [
    ]
}

},{}],5:[function(require,module,exports){
module.exports={
    "battlesuit": "Black Nucleus",
    "tag": [
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

},{}],6:[function(require,module,exports){
module.exports={
    "battlesuit": "Dimension Breaker",
    "tag": [
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

},{}],7:[function(require,module,exports){
module.exports={
    "battlesuit": "Herrscher of Reason",
    "tag": [
        "HoR",
        "HR",
        "BK"
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

},{}],8:[function(require,module,exports){
module.exports={
    "battlesuit": "Snowy Sniper",
    "tag": [
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

},{}],9:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Chariot",
    "tag": [
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

},{}],10:[function(require,module,exports){
module.exports={
    "battlesuit": "Wolf's Dawn",
    "tag": [
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

},{}],11:[function(require,module,exports){
module.exports={
    "battlesuit": "Yamabuki Armor",
    "tag": [
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

},{}],12:[function(require,module,exports){
module.exports={
    "battlesuit": "Azure Empyrea",
    "tag": [
        "AE",
        "SB"
    ],
    "type": "Psychic",
    "soul": "Awakening",
    "firstname": "Fu",
    "lastname": "Hua",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/b/b9/Azure_Empyrea.png/936px-Azure_Empyrea.png",
    "birthday": "February 9th",
    "weapon": "Gauntlets",
    "costume": [
        "Azure Empyrea",
        "Cerulean Court"
    ],
    "fragdropinfo": [
    ]
}

},{}],13:[function(require,module,exports){
module.exports={
    "battlesuit": "Night Squire",
    "tag": [
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
        "Dark Butler",
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

},{}],14:[function(require,module,exports){
module.exports={
    "battlesuit": "Phoenix",
    "tag": [
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

},{}],15:[function(require,module,exports){
module.exports={
    "battlesuit": "Shadow Knight",
    "tag": [
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
        "Shadow Knight",
        "Blood Voivode"
    ],
    "fragdropinfo": [
    ]
}

},{}],16:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Accipiter",
    "tag": [
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
        "Hawk of the Yard",
        "Onyx Simurgh"
    ],
    "fragdropinfo": [
        "Story 1-13 (H)",
        "Story 3-18 (H)",
        "Story 2-2 (S)",
        "Story 7-2 (S)"
    ]
}

},{}],17:[function(require,module,exports){
module.exports={
    "battlesuit": "Imayoh Ritual",
    "tag": [
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

},{}],18:[function(require,module,exports){
module.exports={
    "battlesuit": "Sixth Serenade",
    "tag": [
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

},{}],19:[function(require,module,exports){
module.exports={
    "battlesuit": "Sundenjager",
    "tag": [
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

},{}],20:[function(require,module,exports){
module.exports={
    "battlesuit": "Divine Prayer",
    "tag": [
        "DP",
        "Tuna"
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
        "Frostmoon Bunny",
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

},{}],21:[function(require,module,exports){
module.exports={
    "battlesuit": "Herrscher of the Void",
    "tag": [
        "HotV",
        "HoV",
        "HV",
        "GK",
        "Tuna"
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

},{}],22:[function(require,module,exports){
module.exports={
    "battlesuit": "Knight Moonbeam",
    "tag": [
        "KMB",
        "Tuna"
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
        "Bastet's Secret",
        "Dark Devourer",
        "Sunny Beach"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],23:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Ranger",
    "tag": [
        "VR",
        "VD",
        "Tuna"
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

},{}],24:[function(require,module,exports){
module.exports={
    "battlesuit": "White Comet",
    "tag": [
        "WC",
        "Tuna"
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

},{}],25:[function(require,module,exports){
module.exports={
    "battlesuit": "Blueberry Blitz",
    "tag": [
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
        "Lavender Glow",
        "Shelley's Beastliya",
        "Wave Galactica"
    ],
    "fragdropinfo": [
        "Chronicles: Dreams of Gemina",
        "Stage 7-1 (H)",
        "Stage 11-5 (H)",
        "Stage 2-17 (S)",
        "Stage 11-7 (S)"
    ]
}

},{}],26:[function(require,module,exports){
module.exports={
    "battlesuit": "Artic Kriegsmesser",
    "tag": [
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

},{}],27:[function(require,module,exports){
module.exports={
    "battlesuit": "Battle Storm",
    "tag": [
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

},{}],28:[function(require,module,exports){
module.exports={
    "battlesuit": "Blood Rose",
    "tag": [
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
        "Night Enchantress",
        "Rosy Passion",
        "Black Mamba"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],29:[function(require,module,exports){
module.exports={
    "battlesuit": "Scarlet Fusion",
    "tag": [
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

},{}],30:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Triumph",
    "tag": [
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

},{}],31:[function(require,module,exports){
module.exports={
    "battlesuit": "Vermilion Knight",
    "tag": [
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
        "Rouged Mayumi",
        "Vernal Brocade"
    ],
    "fragdropinfo": [
    ]
}

},{}],32:[function(require,module,exports){
module.exports={
    "battlesuit": "Crimson Impulse",
    "tag": [
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

},{}],33:[function(require,module,exports){
module.exports={
    "battlesuit": "Herrscher of Thunder",
    "tag": [
        "HoT",
        "HT",
        "HoL",
        "McD"
    ],
    "type": "Psychic",
    "soul": "Awakening",
    "firstname": "Mei",
    "lastname": "Raiden",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/3/3c/Herrscher_of_Thunder.png",
    "birthday": "April 13th",
    "weapon": "Katanas",
    "costume": [
        "Herrscher of Thunder"
    ],
    "fragdropinfo": [
    ]
}

},{}],34:[function(require,module,exports){
module.exports={
    "battlesuit": "Lightning Empress",
    "tag": [
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

},{}],35:[function(require,module,exports){
module.exports={
    "battlesuit": "Shadow Dash",
    "tag": [
        "SD",
        "DS"
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
        "Danzai Spectramancer",
        "Orochi Cuirass",
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

},{}],36:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Bladestrike",
    "tag": [
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

},{}],37:[function(require,module,exports){
module.exports={
    "battlesuit": "Molotov Cherry",
    "tag": [
        "MC", 
        "FT"
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
        "Coral Sunrise",
        "Fervent Tempo",
        "Gothic Rozamary",
        "Violet Dreamscape"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],38:[function(require,module,exports){
module.exports={
    "battlesuit": "Argent Knight",
    "tag": [
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

},{}],39:[function(require,module,exports){
module.exports={
    "battlesuit": "Fallen Rosemary",
    "tag": [
        "FR"
    ],
    "type": "Quantum",
    "soul": "Original",
    "firstname": "Rita",
    "lastname": "Rossweisse",
    "img": "https://uploadstatic-sea.mihoyo.com/contentweb/20200915/2020091513442677610.png",
    "birthday": "March 1st",
    "weapon": "Scythes",
    "costume": [
        "Fallen Rosemary",
        "Deepwood Thyme"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],40:[function(require,module,exports){
module.exports={
    "battlesuit": "Phantom Iron",
    "tag": [
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

},{}],41:[function(require,module,exports){
module.exports={
    "battlesuit": "Umbral Rose",
    "tag": [
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
        "Dusky Murmurs",
        "Hanafuda Oyabun",
        "Victoria"
    ],
    "fragdropinfo": [
        "Story 2-11 (H)",
        "Story 3-4 (S)",
        "Story 9-10 (H)",
        "Story 9-4 (S)"
    ]
}

},{}],42:[function(require,module,exports){
module.exports={
    "battlesuit": "Stygian Nymph",
    "tag": [
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

},{}],43:[function(require,module,exports){
module.exports={
    "battlesuit": "Swallowtail Phantasm",
    "tag": [
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
        "Dream Seeker",
        "Papilio Lily"
    ],
    "fragdropinfo": [
        "Stage 4-10 (H)",
        "Stage XI-1-2 (H)",
        "Stage 6-5 (S)",
        "Stage XI-1-1 (S)",
    ]
}

},{}],44:[function(require,module,exports){
module.exports={
    "battlesuit": "Celestial Hymn",
    "tag": [
        "CH",
        "Teri"
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
        "Empyrean Psalms",
        "Starry Night",
        "Grand Sage"
    ],
    "fragdropinfo": [
    ]
}

},{}],45:[function(require,module,exports){
module.exports={
    "battlesuit": "Luna Kindred",
    "tag": [
        "LK",
        "Teri"
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

},{}],46:[function(require,module,exports){
module.exports={
    "battlesuit": "Sakuno Rondo",
    "tag": [
        "SR",
        "Teri"
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

},{}],47:[function(require,module,exports){
module.exports={
    "battlesuit": "Starlit Astrologos",
    "tag": [
        "SA",
        "Teri"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Theresa",
    "lastname": "Apocalypse",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/8/8c/Starlit_Astrologos.png/936px-Starlit_Astrologos.png",
    "birthday": "Unknown",
    "weapon": "Crosses",
    "costume": [
        "Starlit Astrologos"
    ],
    "fragdropinfo": [
    ]
}

},{}],48:[function(require,module,exports){
module.exports={
    "battlesuit": "Valkyrie Pledge",
    "tag": [
        "VP",
        "Teri"
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

},{}],49:[function(require,module,exports){
module.exports={
    "battlesuit": "Violet Executer",
    "tag": [
        "VE",
        "TP",
        "Teri"
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

},{}],50:[function(require,module,exports){
module.exports={
    "battlesuit": "DarkBolt Jonin",
    "tag": [
        "DJ",
        "Kasumi"
    ],
    "type": "Biologic",
    "soul": "Original",
    "firstname": "Sakura",
    "lastname": "Yae",
    "img": "https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/thumb/4/4b/Darkbolt_Jonin.png/936px-Darkbolt_Jonin.png",
    "birthday": "July 22th",
    "weapon": "Katanas",
    "costume": [
        "Darkbolt Jonin",
        "Peach Sanctuary",
        "Shiden Kasumi"
    ],
    "fragdropinfo": [
        "Open World: Adventure Tasks",
        "Asterite Shop",
        "Battle Arsenal"
    ]
}

},{}],51:[function(require,module,exports){
module.exports={
    "battlesuit": "Flame Sakitama",
    "tag": [
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

},{}],52:[function(require,module,exports){
module.exports={
    "battlesuit": "Goushinnso Memento",
    "tag": [
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
        "Hyoukai Sonata",
        "Summer Dream"
    ],
    "fragdropinfo": [
        "War Treasury"
    ]
}

},{}],53:[function(require,module,exports){
module.exports={
    "battlesuit": "Gyakushinn Miko",
    "tag": [
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
