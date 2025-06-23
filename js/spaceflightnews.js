// Get the date
const date = new Date();
date.setDate(date.getDate() - 1);
// Convert to YYYY-MM-DD format
let dateFormat = date.toISOString().split('T')[0];
//console.log("date: " + dateFormat);

// URL example: https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=10&offset=10&published_at_gt=2025-06-09
let JSONurl = "https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=10&offset=10&published_at_gt=" + dateFormat;
let allTitles = "";
let counter = 0;

async function spaceFlightNews() {
    console.log("Spaceflight News API: " + JSONurl);
    try {
        const response = await fetch(JSONurl);
        const data = await response.json();
        
        // Output example: [1] Comet-Catching NASA Technology Enables Exotic Works of Art
        for (var i=0, len=data.results.length; i<len; i++) {
            counter = i + 1;
            allTitles += "[" + counter + "] ";
            allTitles += data.results[i].title;
            allTitles += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
        }
        //console.log("All titles: " + allTitles);
        
        // If there is at least a title, show it
        if (data.results.length > 0) {
            document.getElementById("SpaceFlightNewsAllTitles").innerHTML = "<marquee scrollamount='6'>" + allTitles + "</marquee>";
        }
    } catch (error) {
        document.getElementById("SpaceFlightNewsAllTitles").innerHTML = "(Broken API link)";
    }
}

spaceFlightNews();