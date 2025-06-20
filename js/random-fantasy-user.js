let fantasy = [
    "ac", "ade", "ae", "age", "ai", "al", "alpha", "an", "angel", "ar", "art", "arch", "ard", "as", "at", "ath", "aun", "axe",
    "bad", "bath", "beta", "bel", "biel", "blade", "ble", "blood", "bolt", "bri", "bus",
    "ca", "cath", "cha", "chaos", "cia", "cius", "cold", "cool", "con", "cula", "crim", "criss", "crys", "cul",
    "dae", "dark", "death", "dei", "demo", "di", "doom", "dra", "dry", "dus",
    "el", "elle", "eld", "elf", "eli", "ely", "em", "emi", "en", "ene", "ent", "era", "eri", "ess", "et", "eth", "eva", "ever",
    "fallen", "fel", "fi", "fire", "fo", "fu",
    "ga", "gar", "gel", "gon", "good", "grim", "gun",
    "halt", "hard", "hawk", "hi", "hor", "hot", "hum",
    "ian", "ich", "ial", "ice", "iel", "ielle", "il", "in", "ik", "ish", "ita", "ith", "ius", "iv", "ivy", "iri", "iro",
    "ja", "je", "jet", "ji", "jo", "judge", "just",
    "ka", "karma", "kath", "kage", "ki", "kind", "king", "knight", "kryo", "ku",
    "la", "le", "ley", "li", "lich", "line", "lith", "lidy", "light", "liz", "lur", "ly",
    "ma", "mage", "magic", "mal", "mam", "master", "me", "med", "mel", "mer", "mid", "mim", "mist", "miza", "mont", "more",
    "na", "naut", "ne", "ni", "nic", "nika", "nine", "ning", "night", "no", "nom", "nu", "ny",
    "ob", "ome", "on", "oni", "op", "ope", "or", "ory", "os", "ost", "oth", "ous", "ox",
    "pale", "phil", "pi", "por", "pre", "pris",
    "qi", "queen", "quo",
    "rai", "ran", "rath", "re", "rei", "rech", "ren", "ri", "rich", "rick", "riel", "ripe", "ripper", "ro", "ru", "ruel", "ry",
    "sa", "sada", "san", "scythe", "se", "sel", "shi", "sia", "silver", "sin", "shadow", "sky", "soli", "sona", "spear", "star",
    "taly", "tan", "tania", "tek", "ter", "ti", "tic", "tin", "tina", "tri", "trick",
    "us", "uil", "undead", "usa", "utz",
    "val", "ve", "vel", "velle", "vi", "vini", "vo", "void", "von",
    "wal", "war", "well", "will", "win", "witch",
    "xa", "xe", "xi", "xin", "xio", "xue", "xuel",
    "ya", "ye", "yo", "york", "yuri",
    "ze", "zeni", "zeta", "zion", "zu", "zuel"
];

let euro = [
    "ak", "al", "alex", "art", "auf", "augs",
    "bar", "be", "bene", "bern", "bert", "bin", "borg", "brun", "burg",
    "caci", "cari", "chim",
    "da", "das", "de", "den", "di", "die", "diet", "dikt", "dith", "dolf", "drik",
    "eber", "eck", "ed", "ekke", "em", "ene", "engel", "enz", "eve",
    "fan", "fia", "fine", "frank", "frei", "fried", "fuh", "fur",
    "gang", "geb", "gen", "go", "gor", "gre", "gun", "gus",
    "halt", "han", "hard", "hein", "helm", "hild", "hilf", "hin", "hold", "hu",
    "ich", "ida", "ir", "isa", "ist",
    "ja", "jak", "jan", "jo", "joa", "jona", "ju",
    "ka", "kann", "kar", "ke", "kla", "kolo", "kor", "kresz", "krim",
    "la", "lebe", "len", "lias", "lius", "lo", "lu", "lud",
    "mann", "maus", "mei", "mein", "merich", "mu", "mund", "muns",
    "nart", "ne", "nes", "nich", "nieder", "nine", "noch",
    "ob",
    "ra", "recht", "ren", "renz", "rer", "rich", "rik",
    "sach", "sieg", "sind", "so", "stein", "sten", "sven",
    "taf", "tav", "ter", "than", "ther", "tiede", "toria", "trud",
    "us", "ute", "utz",
    "ves", "vik", "vin", "von",
    "wal", "walde", "was", "wen", "wie", "wies", "wig", "win", "wolf", "wulf",
    "zel", "zent", "zenz", "zu"
];

let asia = [
    "ai", "aiko", "aki", "ao", "asu", "aya", "ayu",
    "ba", "bu", "bi",
    "chi", "cho",
    "da", "dai", "deki", "den", "do",
    "et",
    "fu",
    "ga", "gai",
    "hachi", "haru", "hi", "hon",
    "ichi", "iga", "itsu", "izu",
    "ji", "jun",
    "ka", "kai", "ke", "ken", "ki", "ko", "kyo", "ku",
    "ma", "mi",
    "na", "no", 
    "ouke",
    "ra", "rai", "rei", "ren", "ri", "rin", "ro", "rou", "ru", "ryo", "ryu",
    "sa", "sai", "sam", "shi", "shin", "sho", "shouta", "shun", "su", "suke",
    "ta", "tai", "ten", "taka", "take", "to", "tomo", "tsu",
    "uke",
    "ya", "yate", "yama", "yo", "yu",
    "za", "zue", "zuki", "zuo", "zu"
];

let selectedMode = [];
let selectedModeLength = 0;
let fanUserSelectedMode = "";
let fanUserNameLength = 0;
let fanUserOutput = "";

function fanuserExecute() {
    fanUserSelectedMode = document.getElementById("fanuser-mode").value;
    fanUserNameLength = document.getElementById("fanuser-name-length").value;
    //console.log("fanUserSelectedMode: " + fanUserSelectedMode);
    //console.log("fanUserNameLength: " + fanUserNameLength);

    if (fanUserSelectedMode == "Fantasy") {
        selectedMode = fantasy;
        selectedModeLength = fantasy.length;
    } else if (fanUserSelectedMode == "Euro") {
        selectedMode = euro;
        selectedModeLength = euro.length;
    } else if (fanUserSelectedMode == "Asia") {
        selectedMode = asia;
        selectedModeLength = asia.length;
    }
    
    let tempString = "";
    for(let i=0; i<fanUserNameLength; i++) {
        tempString += selectedMode[Math.floor(Math.random() * selectedModeLength)];
    }
    // Uppercase the first letter
    fanUserOutput += tempString.charAt(0).toUpperCase() + tempString.slice(1);
    fanUserOutput += "\n"

    //console.log("Output: \n" + fanUserOutput);
    var textareaFanUser = document.getElementById("fantasy-username-output");
    // When more outputs are added, we want the scrollbar to go to the bottom
    textareaFanUser.scrollTop = textareaFanUser.scrollHeight;
    // Showing output in the textarea
    textareaFanUser.innerHTML = fanUserOutput;
}

function clearFanUserOutput() {
    document.getElementById("fantasy-username-output").innerHTML = ""; // Empty the textarea
    fanUserOutput = ""; // Empty the output too
}

function copySelectAllFanUser(id) {
	let input = document.getElementById(id);
	input.select();
    //input.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(input.value);
}