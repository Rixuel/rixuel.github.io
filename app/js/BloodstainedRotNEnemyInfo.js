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
				if (searchWord == "" || searchWord == " ") {
					// Do nothing
				} else if (data[i].id == searchWord ||
					data[i].Name.toLowerCase().includes(searchWord.toLowerCase()) ||
					data[i].Shard[0].Name.toLowerCase().includes(searchWord.toLowerCase()) ||
					data[i].Shard[0].Type.toLowerCase() == searchWord.toLowerCase() ||
					(data[i].Drop[0].Item.toLowerCase().includes(searchWord.toLowerCase()) && !/^\d+$/.test(searchWord)) ||
					(data[i].Drop[1].Item.toLowerCase().includes(searchWord.toLowerCase()) && !/^\d+$/.test(searchWord)) ||
					(data[i].Drop[2].Item.toLowerCase().includes(searchWord.toLowerCase()) && !/^\d+$/.test(searchWord)) ||
					(data[i].Drop[3].Item.toLowerCase().includes(searchWord.toLowerCase()) && !/^\d+$/.test(searchWord)) ) {
					
					// Search one or multiple results
					dataResult += "<div class='content'>"
					dataResult += "<h1><b>" + data[i].Name + " (</b>ID: " + data[i].id + ")</h1>";
					dataResult += "<img style='vertical-align:middle' src='img/stat-lv.png'> " + data[i].Stats[0].LV + "&nbsp;&nbsp;<img style='vertical-align:middle' src='img/stat-exp.png'> " + data[i].Stats[0].EXP + "&nbsp;&nbsp;<img style='vertical-align:middle' src='img/stat-hp.png'> " + data[i].Stats[0].HP + "<br>";

					dataResult += "<div class='columns'>";
						dataResult += "<div class='column is-half'>";
						dataResult += "<br><b>Resist: </b><br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-slash.png'> - Slash: " + data[i].Resist[0].Slash + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-thrust.png'> - Thrust: " + data[i].Resist[0].Thrust + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-strike.png'> - Strike: " + data[i].Resist[0].Strike + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-fire.png'> - Fire: " + data[i].Resist[0].Fire + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-ice.png'> - Ice: " + data[i].Resist[0].Ice + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-thunder.png'> - Thunder: " + data[i].Resist[0].Thunder + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-light.png'> - Light: " + data[i].Resist[0].Light + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-darkness.png'> - Darkness: " + data[i].Resist[0].Darkness + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-poison.png'> - Poison: " + data[i].Resist[0].Poison + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-curses.png'> - Curses: " + data[i].Resist[0].Curses + "<br>";
						dataResult += "<img style='vertical-align:middle' src='img/res-petrification.png'> - Petrification: " + data[i].Resist[0].Petrification + "<br>";
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
					dataResult += "<hr>" + data[i].Description;
					dataResult += "</div>"
				}
			}
			document.getElementById("result").innerHTML = dataResult;
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
				dataResult += "<div class='content'>"
				dataResult += "<h1><b>" + data[i].Name + " (</b>ID: " + data[i].id + ")</h1>";
				dataResult += "<img style='vertical-align:middle' src='img/stat-lv.png'> " + data[i].Stats[0].LV + "&nbsp;&nbsp;<img style='vertical-align:middle' src='img/stat-exp.png'> " + data[i].Stats[0].EXP + "&nbsp;&nbsp;<img style='vertical-align:middle' src='img/stat-hp.png'> " + data[i].Stats[0].HP + "<br>";

				dataResult += "<div class='columns'>";
					dataResult += "<div class='column is-half'>";
					dataResult += "<br><b>Resist: </b><br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-slash.png'> - Slash: " + data[i].Resist[0].Slash + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-thrust.png'> - Thrust: " + data[i].Resist[0].Thrust + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-strike.png'> - Strike: " + data[i].Resist[0].Strike + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-fire.png'> - Fire: " + data[i].Resist[0].Fire + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-ice.png'> - Ice: " + data[i].Resist[0].Ice + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-thunder.png'> - Thunder: " + data[i].Resist[0].Thunder + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-light.png'> - Light: " + data[i].Resist[0].Light + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-darkness.png'> - Darkness: " + data[i].Resist[0].Darkness + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-poison.png'> - Poison: " + data[i].Resist[0].Poison + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-curses.png'> - Curses: " + data[i].Resist[0].Curses + "<br>";
					dataResult += "<img style='vertical-align:middle' src='img/res-petrification.png'> - Petrification: " + data[i].Resist[0].Petrification + "<br>";
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
				dataResult += "<hr>" + data[i].Description;
				dataResult += "</div>"
			}
			document.getElementById("result").innerHTML = dataResult;
		}
	});
}
