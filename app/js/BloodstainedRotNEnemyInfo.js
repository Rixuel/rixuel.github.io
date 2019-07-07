var JSONurl = "../app/json/BloodstainedRotNEnemyInfo.json";
var searchWord = "";
var searchBarInput = document.getElementById("searchBar");
searchBarInput.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("searchButton").click();
	}
});

function searchInput() {
	searchWord = document.getElementById("searchBar").value;
	//console.log("searchWord: " + searchWord);
	$('#result').html("");
}

function getJSON() {
	var dataResult = "";

	$.ajax({
		url: JSONurl,
		type: "get",
		dataType: 'json',
		mimeType: "application/json",
		success: function(data){

			for (var i=0; i<data.length; i++) {

				if (data[i].id == searchWord ||
					data[i].Name.toLowerCase() == searchWord.toLowerCase() ||
					data[i].Shard[0].Name.toLowerCase() == searchWord.toLowerCase() ||
					data[i].Shard[0].Type.toLowerCase() == searchWord.toLowerCase() ||
					data[i].Drop[0].Item.toLowerCase() == searchWord.toLowerCase() ||
					data[i].Drop[1].Item.toLowerCase() == searchWord.toLowerCase() ||
					data[i].Drop[2].Item.toLowerCase() == searchWord.toLowerCase() ||
					data[i].Drop[3].Item.toLowerCase() == searchWord.toLowerCase()) {

					// Search one or multiple results
					dataResult += "<h1><b>" + data[i].Name + " (</b>ID: " + data[i].id + ")</h1>";
					dataResult += "LV: " + data[i].Stats[0].LV + " | EXP: " + data[i].Stats[0].EXP + " | HP: " + data[i].Stats[0].HP + "<br>";

					dataResult += "<div class='columns'>";
						dataResult += "<div class='column is-half'>";
						dataResult += "<br><b>Resist: </b><br>";
						dataResult += "- Slash: " + data[i].Resist[0].Slash + "<br>";
						dataResult += "- Thrust: " + data[i].Resist[0].Thrust + "<br>";
						dataResult += "- Strike: " + data[i].Resist[0].Strike + "<br>";
						dataResult += "- Fire: " + data[i].Resist[0].Fire + "<br>";
						dataResult += "- Ice: " + data[i].Resist[0].Ice + "<br>";
						dataResult += "- Thunder: " + data[i].Resist[0].Thunder + "<br>";
						dataResult += "- Light: " + data[i].Resist[0].Light + "<br>";
						dataResult += "- Darkness: " + data[i].Resist[0].Darkness + "<br>";
						dataResult += "- Poison: " + data[i].Resist[0].Poison + "<br>";
						dataResult += "- Curses: " + data[i].Resist[0].Curses + "<br>";
						dataResult += "- Petrification: " + data[i].Resist[0].Petrification + "<br>";
						dataResult += "</div>";

						dataResult += "<div class='column'>";



						dataResult += "<br><b>" + data[i].Shard[0].Type + " Shard: </b><br>";
						dataResult += "- " + data[i].Shard[0].Name + " (" + data[i].Shard[0].Rate + "%)<br>";
						dataResult += "<br><b>Drop: </b><br>";
						for (var ii=0; ii<data[i].Drop.length; ii++) {
							dataResult += "- " + data[i].Drop[ii].Item + " (" + data[i].Drop[ii].Rate + "%)" + "<br>";
						}
						dataResult += "<br><b>Area: </b><br>";
						for (var ii=0; ii<data[i].Area.length; ii++) {
							dataResult += "- " + data[i].Area[ii] + "<br>";
						}
						dataResult += "</div>";
					dataResult += "</div>";
					dataResult += data[i].Description + "<hr>";

					document.getElementById("result").innerHTML = dataResult;
				} else if (searchWord == "") {
					document.getElementById("result").innerHTML = "Enter something";
				}

			}

		}
	});
}

function showAll() {
	var dataResult = "";

	$.ajax({
		url: JSONurl,
		type: "get",
		dataType: 'json',
		mimeType: "application/json",
		success: function(data){

			for (var i=0; i<data.length; i++) {
				dataResult += "<h1><b>" + data[i].Name + " (</b>ID: " + data[i].id + ")</h1>";
				dataResult += "LV: " + data[i].Stats[0].LV + " | EXP: " + data[i].Stats[0].EXP + " | HP: " + data[i].Stats[0].HP + "<br>";

				dataResult += "<div class='columns'>";
					dataResult += "<div class='column is-half'>";
					dataResult += "<br><b>Resist: </b><br>";
					dataResult += "- Slash: " + data[i].Resist[0].Slash + "<br>";
					dataResult += "- Thrust: " + data[i].Resist[0].Thrust + "<br>";
					dataResult += "- Strike: " + data[i].Resist[0].Strike + "<br>";
					dataResult += "- Fire: " + data[i].Resist[0].Fire + "<br>";
					dataResult += "- Ice: " + data[i].Resist[0].Ice + "<br>";
					dataResult += "- Thunder: " + data[i].Resist[0].Thunder + "<br>";
					dataResult += "- Light: " + data[i].Resist[0].Light + "<br>";
					dataResult += "- Darkness: " + data[i].Resist[0].Darkness + "<br>";
					dataResult += "- Poison: " + data[i].Resist[0].Poison + "<br>";
					dataResult += "- Curses: " + data[i].Resist[0].Curses + "<br>";
					dataResult += "- Petrification: " + data[i].Resist[0].Petrification + "<br>";
					dataResult += "</div>";

					dataResult += "<div class='column'>";



					dataResult += "<br><b>" + data[i].Shard[0].Type + " Shard: </b><br>";
					dataResult += "- " + data[i].Shard[0].Name + " (" + data[i].Shard[0].Rate + "%)<br>";
					dataResult += "<br><b>Drop: </b><br>";
					for (var ii=0; ii<data[i].Drop.length; ii++) {
						dataResult += "- " + data[i].Drop[ii].Item + " (" + data[i].Drop[ii].Rate + "%)" + "<br>";
					}
					dataResult += "<br><b>Area: </b><br>";
					for (var ii=0; ii<data[i].Area.length; ii++) {
						dataResult += "- " + data[i].Area[ii] + "<br>";
					}
					dataResult += "</div>";
				dataResult += "</div>";
				dataResult += data[i].Description + "<hr>";

				document.getElementById("result").innerHTML = dataResult;
			}

		}
	});
}
