function adsbanners(){"use strict";var ads,index;ads=[];

	ads[0]= "<a href='#/'>"+
			"<img src='images/alternalogo.png' border='0'/></a>";

	ads[1]= "<a href='#/'>"+
			"<img src='images/terra.png' border='0'/></a>";

index=Math.floor(Math.random()*ads.length);
document.getElementById("adsfooter").innerHTML=ads[index];}