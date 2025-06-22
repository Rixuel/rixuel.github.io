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

let chinese = [
    "a", "ai", "an", "ang", "ao",
    "ba", "bai", "ban", "bang", "bao", "bei", "ben", "beng", "bi", "bian", "biao", "bie", "bin", "bing", "bo", "bu",
    "ca", "cai", "can", "cang", "cao", "ce", "cen", "ceng", "cha", "chai", "chan", "chang", "chao", "che", "chen", "cheng", "chi", "chong", "chou", "chu", "chua", "chuai", "chuan", "chuang", "chui", "chun", "chuo",
    "ci", "cong", "cou", "cu", "cuan", "cui", "cun", "cuo",
    "da", "dai", "dan", "dang", "dao", "de", "dei", "den", "deng", "di", "dia", "dian", "diao", "die", "ding", "diu", "dong", "dou", "du", "duan", "dui", "dun", "duo",
    "ei", "en", "eng", "er",
    "fa", "fan", "fang", "fei", "fen", "feng", "fo", "fou", "fu",
    "ga", "gai", "gan", "gang", "gao", "ge", "gei", "gen", "geng", "gong", "gou", "gu", "gua", "guai", "guan", "guang", "gui", "gun", "guo",
    "ha", "hai", "han", "hang", "hao", "he", "hei", "hen", "heng", "hong", "hou", "hu", "hua", "huai", "huan", "huang", "hui", "hun", "huo",
    "ji", "jia", "jian", "jiang", "jiao", "jie", "jin", "jing", "jiong", "jiu", "ju", "juan", "jue", "jun",
    "ka", "kai", "kan", "kang", "kao", "ke", "ken", "keng", "kong", "kou", "ku", "kua", "kuai", "kuan", "kuang", "kui", "kun", "kuo",
    "la", "lai", "lan", "lang", "lao", "le", "lei", "leng", "li", "lia", "lian", "liang", "liao", "lie", "lin", "ling", "liu", "long", "lou", "lu", "luan", "lue", "lun", "luo",
    "ma", "mai", "man", "mang", "mao", "me", "mei", "men", "meng", "mi", "mian", "miao", "mie", "min", "ming", "miu", "mo", "mou", "mu",
    "na", "nai", "nan", "nang", "nao", "ne", "nei", "nen", "neng", "ni", "nian", "niang", "niao", "nie", "nin", "ning", "niu", "nong", "nou", "nu", "nuan", "nue", "nuo",
    "o", "ou",
    "pa", "pai", "pan", "pang", "pao", "pei", "pen", "peng", "pi", "pian", "piao", "pie", "pin", "ping", "po", "pou", "pu",
    "qi", "qia", "qian", "qiang", "qiao", "qie", "qin", "qing", "qiong", "qiu", "qu", "quan", "que", "qun",
    "ran", "rang", "rao", "re", "ren", "reng", "ri", "rong", "rou", "ru", "rua", "ruan", "rui", "run", "ruo",
    "sa", "sai", "san", "sang", "sao", "se", "sen", "seng", "sha", "shai", "shan", "shang", "shao", "she", "shen", "sheng", "shi", "shou", "shu", "shua", "shuai", "shuan", "shuang", "shui", "shun", "shuo",
    "si", "song", "sou", "su", "suan", "sui", "sun", "suo",
    "ta", "tai", "tan", "tang", "tao", "te", "teng", "ti", "tian", "tiao", "tie", "ting", "tong", "tou", "tu", "tuan", "tui", "tun", "tuo",
    "wa", "wai", "wan", "wang", "wei", "wen", "weng", "wo", "wu",
    "xi", "xia", "xian", "xiang", "xiao", "xie", "xin", "xing", "xiong", "xiu", "xu", "xuan", "xue", "xun",
    "ya", "yan", "yang", "yao", "ye", "yi", "yin", "ying", "yo", "yong", "you", "yu", "yuan", "yue", "yun",
    "za", "zai", "zan", "zang", "zao", "ze", "zei", "zen", "zeng", "zha", "zhai", "zhan", "zhang", "zhao", "zhe", "zhen", "zheng", "zhi", "zhong", "zhou", "zhu", "zhua", "zhuai", "zhuan", "zhuang", "zhui", "zhun", "zhuo",
    "zi", "zong", "zou", "zu", "zuan", "zui", "zun", "zuo"
];

let german = [
    "ak", "al", "alex", "art", "auf", "augs",
    "bar", "be", "bel", "bene", "bern", "bert", "bian", "bias", "bin", "borg", "brun", "burg",
    "caci", "cari", "chim",
    "da", "das", "de", "den", "di", "die", "diet", "dikt", "dith", "dolf", "drik",
    "eber", "eck", "ed", "ekke", "el", "em", "ene", "engel", "enz", "eve",
    "fa", "fan", "fia", "fine", "frank", "frei", "fried", "fuh", "fur",
    "gang", "geb", "gen", "go", "gor", "gre", "grid", "gun", "gus",
    "halt", "han", "hanna", "hard", "hein", "helm", "hild", "hilf", "hin", "hold", "hu",
    "ich", "ida", "in", "ir", "isa", "ist",
    "ja", "jak", "jan", "jo", "joa", "jona", "ju",
    "ka", "kann", "kar", "ke", "kla", "kolo", "kon", "kor", "kresz", "krim",
    "la", "lebe", "len", "lias", "lius", "lo", "lu", "lud",
    "mann", "maus", "mei", "mein", "merich", "mo", "mu", "mund", "muns",
    "nart", "ne", "nes", "nich", "nieder", "nine", "noch",
    "ob", "ot",
    "ra", "rad", "recht", "ren", "renz", "rer", "rich", "rik", "ritz",
    "sa", "sach", "sieg", "sind", "so", "stein", "sten", "sven",
    "taf", "tav", "ter", "than", "ther", "tiede", "to", "toria", "trud",
    "us", "ute", "utz",
    "ves", "vik", "vin", "von",
    "wal", "walde", "was", "wen", "wie", "wies", "wig", "wil", "win", "wolf", "wulf",
    "zel", "zent", "zenz", "zu"
];

let greek = [
    "aca", "achai", "aes", "aga", "agn", "al", "alex", "am", "anas", "ander", "andra", "andros", "aphro", "apol", "arca", "arche", "aris", "arte", 
    "brosia", "brosios",
    "caeus", "cass", "chrys", "chylus", "cius", "cle", "clid", "co", "cus", "cy",
    "deme", "demo", "demon", "dion", "disia", "dius", "dora", "doros", "dra",
    "eas", "ene", "eras", "es", "eu", "euge",
    "gai", "gios", "gius", 
    "hele", "hera", "herm", "hiero",
    "ia", "idas", "ios", "ire", "is", "isi", 
    "ka", "kalli", "kar", "kass", "kleo", "kos",
    "laos", "leon", "lia", "lige", "lin", "lon", "ly", "lys", 
    "mache", "melis", "misia", "mos", "my",
    "na", "ne", "neo", "nico", "nius", "nymos",
    "olym", "on", "op", "orphe", "os",
    "panthe", "pela", "pelios", "pelius", "petos", "phia", "phil", "pho", "phon", "phosa", "phus", "pos", "pus", 
    "ras", "ron", "roxa", "rus",
    "sa", "so", "stos", "strate",
    "tasia", "tasios", "tha", "the", "theo", "thon", "tides", "tocles", "tolius", "ton", "tos", "tria", "trios", "try",
    "xan", "xen", "xeno",
    "ysius",
    "zeno", "zenon"
];

let japanese = [
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

let korean = [
    "an", 
    "bang", "bok", 
    "cha", "chang", "cho",
    "dong",
    "eul", "eun",
    "gi", "gu", "gwa", "gye",
    "ha", "han", "ho", "hun", "hwa", "hye", "hyung",
    "is",
    "jae", "je", "ji", "jin", "jo", "jong", "joon", "jun",
    "kang", "ki", "kim", "ky",
    "lee",
    "ma", "moon", "mye",
    "na", "nim",
    "ok", "on",
    "park",
    "ri",
    "san", "sang", "se", "seo", "shin", "si", "song", "sung",
    "uk", "ul", "ung",
    "wo",
    "ye", "yeon", "yo", "yong", "young", "yu"
];

let roman = [
    "ael", "aem", "aet", "al", "amo", "ana", "aur", "augus", "avi", "avia",
    "bal", "blan", "blas", "bru",
    "cae", "cael", "caes", "cai", "cami", "cass", "cat", "cel", "cice", "cilla", "cius", "cimus", "corne", "cretia", "cus",
    "dela", "dus",
    "en", "el", "ele",
    "fab", "faust", "fer", "fla", "flo", "flori",
    "ia", "iana", "ina", "inus", "ius", "ix",
    "gai", "gal", "ginius",
    "lauren", "lina", "linus", "lius", "lo", "long", "luc", "lus",
    "mar", "max", "maxi", "milla",
    "ne", "nelia", "nia", "nius", "no", "non", "nume",
    "oct",
    "pau", "pon", "pris",
    "quin",
    "regu", "rina", "rus",
    "sar", "saturn", "secun", "ser", "sever",
    "ta", "tan", "ti","tiber", "tilius", "tinus", "tus",
    "ro",
    "us",
    "val", "valen", "vari", "vergi", "vi", "vindi", "vini", "vius",
    "xus"
];

let russian = [
    "ad", "aga", "ak", "aki", "aleks", "alex", "am", "an", "ana", "anas", "and", "astas",
    "bo",
    "chka",
    "de", "di", "dik", "dimir", "do", "domir", "dora", "diya",
    "e", "ei", "eka", "ev",
    "gala", "gali", "ge", "gei", "gej", "gela", "geor", "geya", "gy",
    "iri", "isa", "isi", "iana", "ina",
    "je",
    "katerina", "ken", "ki", "kla", "kov", "krist",
    "la", "lai", "lan", "lana", "lav", "len", "lena", "leo", "letta", "lery", "lina", "lisa", "lu",
    "mak", "mar", "mara", "mi", "mir", "milo", "mitri", "minika",
    "na", "nast", "nat", "nata", "nei", "ni", "nika", "nid", "niko", "nov", "nya",
    "ok", "ol",
    "pa", "pat", "pela", "pet", "pla", "pol", "praskov",
    "ra", "rado", "rai", "rei", "rina", "ris", "riya", "rya",
    "sana", "ser", "sevas", "sey", "sha", "sili", "siya", "ska", "sla", "slav", "slava", "svet", "sya",
    "ta", "tai", "tasia", "tasiya", "tek", "terina", "tian", "ton", "tor", "toriya",
    "ul", "usha", "usti",
    "va", "vale", "vel", "vera", "vik", "vio", "vlad", "vladi",
    "ya", "ye", "yu",
    "za", "zaliya", "zanna", "zar", "zi", "zino", "zla", "zo"
];

let vietnamese = [
    "an", "anh",
    "bao", "bich", "binh",
    "cam", "chau", "chi", "chim", "cho", "chua", "cuc",
    "dai", "dao", "dat", "diep", "dep", "dinh", "do", "dong", "duc", "dung", "duong",
    "hao", "hiep", "ho", "hoa", "hong", "hue", "hung", "huong", "huy",
    "kiem", "kim", "kin",
    "lan", "lanh", "linh", "loc",
    "mai", "meo", "minh", "moi", "mot", 
    "ngai", "ngo", "ngoc", "ngu", "nguy", "nhung", "nu",
    "ong", "oc",
    "pho", "phu", "phuc",
    "ron",
    "sang", "set", "si", "sung",
    "quan", "quang", "quy", "quyen",
    "tien", "thanh", "thi", "tho", "thu", "thuan", "thuy", "tien", "trai", "trinh", "troi", "truc", "tu", "tuan", "tu", "tuan",
    "van", "vien", "vinh", "vua", 
    "xu",
    "yen", "yet"
];

let genshin = [
    "ae", "al", "am", "an", "ao", "ar", "ara", "aya",
    "bai", "bar", "bara", "bedo", "bei", "ben", "ber", "bert", "bu",
    "capi", "cari", "cha", "char", "chas", "che", "chi", "chino", "chong", "cit", "clo", "cof", "col", "crose", "cy",
    "da", "dah", "dain", "de", "den", "di", "dio", "direi", "do", "dou", "dyth",
    "ede", "emi", "es", "eu", "eya", 
    "fa", "faru", "fei", "fier", "fre", "fu",
    "ga", "glia", "go", "gun",
    "ha", "hai", "hara", "he", "hei", "hi", "hida", "hu", "hya",
    "ian", "ischl", "it",
    "je", "jin",
    "ka", "ke", "ki", "kirk", "ko", "ku",
    "la", "lali", "lan", "lani", "lay", "lec", "lei", "lette", "ley", "li", "lia", "lie", "ling", "lotte", "lou", "lu", "luc", "ly",
    "ma", "mi", "mine", "ming", "miya", "mo", "mon", "mua",
    "na", "nara", "nari", "nen", "net", "nett", "nette", "neu", "ney", "ni", "nich", "no", "nora", "nyu",
    "ori", "oro",
    "pai",
    "qi", "qing", "qiu",
    "ra", "rai", "resa", "ri", "ria", "rina", "rinde", "ro", "ron", "rou",
    "sa", "san", "se", "shen", "shi", "sho", "sig", "sige", "sleff", "su",
    "ta", "taki", "tano", "tao", "tar", "tham", "ther", "thes", "tho", "thos", "ti", "tigh", "to",
    "va", "veh", "ven", "via", "vil", "vreuse", "vui",
    "winne", "wrio",
    "xi", "xian", "xiang", "xilo", "xin", "xing",
    "yae", "yan", "yoi", "yu", "yun",
    "zan", "zhong", "zhu", "zor", "zou", "zu"
];

let vulgar = [
    "ass", "arse",
    "bag", "bastard", "bitch", "brainless", "bull",
    "chicken", "cow", "coward", "crap", "creep",
    "damn", "dense", "dirty", "dog", "dork", "dull", "dumb",
    "eat", "er", "est", "evil",
    "fat", "fart", "fool", "face",
    "ginger", "gutless",
    "hag", "head", "ho",
    "ier", "iest", "idiot",
    "jizz",
    "lard", "lame", "lose", "low",
    "meat", "moron",
    "naive", "noob", "nub",
    "old",
    "pansy", "poor", "prick", "puss",
    "saggy", "shame", "shit", "simp", "stink", "stupid",
    "tard", "trash", "turd",
    "ugly", "unwise",
    "vile",
    "weakling", "whore", "woop", "wuss"
];

let selectedMode = [];
let selectedModeLength = 0;
let fanUserSelectedMode = "";
let fanUserNameLength = 0;
let fanUserOutput = "";
let limitCounter = 0;
let maxLimit = 300;

function fanuserExecute() {
    if (limitCounter < maxLimit) {
        fanUserSelectedMode = document.getElementById("fanuser-mode").value;
        fanUserNameLength = document.getElementById("fanuser-name-length").value;
        //console.log("fanUserSelectedMode: " + fanUserSelectedMode);
        //console.log("fanUserNameLength: " + fanUserNameLength);

        const modes = {
            Fantasy: fantasy,
            Chinese: chinese,
            German: german,
            Greek: greek,
            Japanese: japanese,
            Korean: korean,
            Roman: roman,
            Russian: russian,
            Vietnamese: vietnamese,
            Genshin: genshin,
            Vulgar: vulgar
        };

        const selectedArray = modes[fanUserSelectedMode];

        if (selectedArray) {
            selectedMode = selectedArray;
            selectedModeLength = selectedArray.length;
        }
        
        let tempString = "";
        for(let i=0; i<fanUserNameLength; i++) {
            tempString += selectedMode[Math.floor(Math.random() * selectedModeLength)];
        }
        
        // Uppercase the first letter
        fanUserOutput += tempString.charAt(0).toUpperCase() + tempString.slice(1);

        //console.log("Output: \n" + fanUserOutput);
        var textareaFanUser = document.getElementById("fantasy-username-output");
        // Showing output in the textarea
        textareaFanUser.value = fanUserOutput;
        fanUserOutput += "\n"
        // When more outputs are added, we want the scrollbar to go to the bottom
        textareaFanUser.scrollTop = textareaFanUser.scrollHeight;
        updateLineNumbers();
        limitCounter++;
    }
    //console.log("limitCounter = " + limitCounter);
}

function clearFanUserOutput() {
    //console.log("clearFanUserOutput() clicked")
    document.getElementById("fantasy-username-output").value = ""; // Empty the textarea
    fanUserOutput = ""; // Empty the output too
    updateLineNumbers();
    limitCounter = 0;
    //console.log("limitCounter = " + limitCounter);
}

function copySelectAllFanUser(id) {
	let input = document.getElementById(id);
	input.select();
    //input.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(input.value);
}


/*
    Big code of line-number for the Fantasy Username textarea
*/
const textarea = document.getElementById('fantasy-username-output');
const lineNumbers = document.getElementById('lineNumbers');

function updateLineNumbers() {
    const value = textarea.value || '';
    const lines = value.split('\n');

    // Setup mirror container
    const mirror = document.createElement('div');
    const style = getComputedStyle(textarea);

    mirror.style.position = 'absolute';
    mirror.style.visibility = 'hidden';
    mirror.style.whiteSpace = 'pre-wrap';
    mirror.style.wordBreak = 'break-word';
    mirror.style.fontFamily = style.fontFamily;
    mirror.style.fontSize = style.fontSize;
    mirror.style.lineHeight = style.lineHeight;
    mirror.style.padding = style.padding;
    mirror.style.border = style.border;
    mirror.style.boxSizing = style.boxSizing;
    mirror.style.width = textarea.clientWidth + 'px';

    document.body.appendChild(mirror);

    const lineHeight = parseFloat(style.lineHeight);
    let numbersText = '';

    lines.forEach((line, index) => {
        const span = document.createElement('span');
        span.textContent = line || ' '; // Prevent zero height on empty lines
        mirror.appendChild(span);

        // Measure span height to find wrapped line count
        const spanHeight = span.getBoundingClientRect().height;
        const wrappedLines = Math.max(1, Math.round(spanHeight / lineHeight));

        // Add line number + blank lines for wrapped parts
        numbersText += (index + 1) + '\n';
        for (let i = 1; i < wrappedLines; i++) {
            numbersText += '\n';
        }

        mirror.removeChild(span);
    });

    lineNumbers.textContent = numbersText;

    document.body.removeChild(mirror);
}

textarea.addEventListener('input', updateLineNumbers);
textarea.addEventListener('scroll', () => {
    lineNumbers.scrollTop = textarea.scrollTop;
});
window.addEventListener('resize', updateLineNumbers);
document.addEventListener('DOMContentLoaded', updateLineNumbers);
