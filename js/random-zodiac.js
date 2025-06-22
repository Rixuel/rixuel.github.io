function findZodiac() {
    const input = document.getElementById('birthdate').value;
    // Check if input is correct. If not, there's an error message
    if (!input) {
        document.getElementById('inputDateString').innerHTML = "";
        document.getElementById('westernZodiac').innerHTML = "";
        document.getElementById('chineseZodiac').innerHTML = "Error: Enter a correct date!";
        return;
    }

    // input returns a string in the ISO format YYYY-MM-DD
    // .map(Number) takes each of those strings (YYYY MM DD) and converts them to numbers
    const [year, month, day] = input.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    //console.log(date.toDateString());

    // Western Zodiac
    let westernSign = "";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) westernSign = "♒ Aquarius";
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) westernSign = "♓ Pisces";
    else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) westernSign = "♈ Aries";
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) westernSign = "♉ Taurus";
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) westernSign = "♊ Gemini";
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) westernSign = "♋ Cancer";
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) westernSign = "♌ Leo";
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) westernSign = "♍ Virgo";
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) westernSign = "♎ Libra";
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) westernSign = "♏ Scorpio";
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) westernSign = "♐ Sagittarius";
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) westernSign = "♑ Capricorn";

    // Chinese Zodiac
    const chineseZodiacSigns = [
        "🐀 Rat", "🐂 Ox", "🐅 Tiger", "🐇 Rabbit", "🐉 Dragon", "🐍 Snake",
        "🐎 Horse", "🐐 Goat", "🐒 Monkey", "🐓 Rooster", "🐕 Dog", "🐖 Pig"
    ];
    const baseYear = 2020; // 2020 was a Rat year
    const index = (year - baseYear) % 12;
    const chineseSign = chineseZodiacSigns[(index + 12) % 12]; // handle negative years

    // Outputs
    document.getElementById('inputDateString').innerHTML = `${date.toDateString()}`;
    document.getElementById('westernZodiac').innerHTML = "Western Zodiac:<br>" + westernSign;
    document.getElementById('chineseZodiac').innerHTML = "Chinese Zodiac:<br>" + chineseSign;
}