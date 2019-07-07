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
	console.log("searchWord: " + searchWord);
	$('#result').html("");
}

function getJSON() {
	console.log("getJSON() Trigger!");

	$.ajax({
		url: "../app/json/BloodstainedRotNEnemyInfo.json",
		type: "get",
		dataType: 'json',
		mimeType: "application/json",
		success: function(data){
			console.log(data);
			console.log("Object Length: " + data.length);

			for (var i=0; i<data.length; i++) {

				if (data[i].id == searchWord ||
					data[i].Name.toLowerCase() == searchWord.toLowerCase() ||
					data[i].Shard[0].Name.toLowerCase() == searchWord.toLowerCase()){
					// Search giving unique result
					$('#result').append(data[i].id + "<br>");
					$('#result').append(data[i].Name + "<br>");
					$('#result').append("Shard: " + data[i].Shard[0].Name + "<br>");
					$('#result').append("Shard rate: " + data[i].Shard[0].Rate + "% <br>");
					$('#result').append("Shard type: " + data[i].Shard[0].Type + "<br>");
					$('#result').append(data[i].Description + "<hr>");

					console.log("Drop count: " + data[i].Drop.length);
				} else if (data[i].Shard[0].Type.toLowerCase() == searchWord.toLowerCase()) {
					// Search giving multiple results
					$('#result').append(data[i].id + "<br>");
					$('#result').append(data[i].Name + "<br>");
					$('#result').append("Shard: " + data[i].Shard[0].Name + "<br>");
					$('#result').append("Shard rate: " + data[i].Shard[0].Rate + "% <br>");
					$('#result').append("Shard type: " + data[i].Shard[0].Type + "<br>");
					$('#result').append(data[i].Description + "<hr>");
				} else if (searchWord == "") {
					$('#result').html("Enter something");
				}
			}

		}
	});
}
