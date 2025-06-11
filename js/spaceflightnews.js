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

$.ajax({
    url: JSONurl,
    type: "get",
    dataType: 'json',
    mimeType: "application/json",
    success: function(data){
        console.log("Spaceflight News API: " + JSONurl);
        //console.log("data length: " + data.results.length);
        //console.log("json string: " + JSON.stringify(data, null, 4));

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

    },
    error: function() {
        document.getElementById("SpaceFlightNewsAllTitles").innerHTML = "(Broken API link)";
    }
});
