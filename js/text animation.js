

var display = document.getElementById("flex-item-1");
var slideText = [
	"\" Hi, I am Baraja. \"",
	"\" The secret of getting ahead is to stop talking and start doing.\"", 
	"\" Failure is simply the opportunity to begin again, this time more intelligently. \"",
	"\" I have not failed. I've just found 10,000 ways that won't work. \"\n-Thomas Edison",
	"\" Winners never quit and quitters never win.\" "
];
var i=0, j=0;

var interval = setInterval(slideShowText, 60);

function slideShowText(){
	display.innerHTML += slideText[i][j];
	j++;
	//if a space is encountered then pause a bit
	isLastCharacter = (j-1==slideText[i].length);
	if(slideText[i][j-2] == '.'||isLastCharacter){
		if(isLastCharacter)
			delay(800);
		else
			delay(400);
	}
	
	if(j>slideText[i].length){
		console.log(j);
		j=0, i++;
		display.innerHTML = "";
	}
	if(i>=slideText.length){
		i=0;
	}
}

function delay(time){
	for(var i=0; i<time; i++)
		for(var j=0; j<time; j++)
			for(var k=0; k<time; k++);
}