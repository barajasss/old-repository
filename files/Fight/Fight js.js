//variables
var interval1;
var levelAdd = 1;
var levelAdd2 = 1;
var interval2;
/*Counter for checking that if the counter is 0 what will happen and get increased
counter is used only for the if checking not for other usage*/
var counter = 0;
/*Counter2 is the same as counter it will be used for checking of player 2 and the
counter is used for checking player 1*/
var counter2 = 0;
/*bulletCounter is for checking if the bullet is 0*/
/*bulletCounters are used only for checking bullets and not for other usage*/
var bulletCounter = 0;
/*bulletCounter2 is the same as bulletCounter the bulletCounter2 will check that the 
player2's bullets is 0 or not and bulletCounter will be used for checking that the]
player 2 has any more bullets or not*/
var bulletCounter2 = 0;
//Interval variables
interval1 = setInterval(checkHealth, 500);
interval2 = setInterval(checkHealth2, 500);
//main attack container variables
var attackContainer1 = document.getElementById("Cowboy_1_attacks");
var attackContainer2 = document.getElementById("Cowboy_2_attacks");
//variables of health
var hp1 = document.getElementById("lefthp");
var hp2 = document.getElementById("righthp");
var health = 250;
var health2 = 250;
var bulletDamage = 10;
var megaBulletDamage = 40;
var bulletBlastDamage = 30;
var bulletBullDamage = 20;
//variables of cowboy 2 attack damage

//the bullet attack of cowboy 2 is already in the cowboy one so we can use the variable bulletattack from cowboy 1 variables to reuse
var skyBulletDamage = 25;
var hugeBulletDamage = 30;
var superBulletDamage = 40;

//xp variables
var xpBar1 = document.getElementById("xp-bar-1");
var xpBar2 = document.getElementById("xp-bar-2");
var xp = 0;
var xp2 = 0;
var xpadd = 10;
var xpadd2 = 10;

//bullet variables
var bullets = 130;
var bullets2 = 150;
//cowboy 1 bullet varaibles
var bulletBar1 = document.getElementById("bullets-bar-1");
var bulletBar2 = document.getElementById("bullets-bar-2");
var bulletsLeftDisplay1 = document.getElementById("bullets-left1");
var bulletsLeftDisplay2 = document.getElementById("bullets-left2");
var bulletAttack = 3;
var megaBulletAttack = 5;
var bulletBlast = 10;
var bulletBull = 5;
//cowboy 2 bullet variables

//the bullet attack of cowboy 2 is already in the cowboy one so we can use the variable bulletattack from cowboy 1 variables to reuse
var skyBulletAttack = 15;
var hugebulletAttack = 5;
var superBulletAttack = 20;
//end of bullet variables

//variables of canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var cW = canvas.width;
var cH = canvas.height;
var background = new Image();
var cowboy1 = new Image();
var cowboy2 = new Image();
//Cowboy 1 attack variables
var cowboy1Bullet = document.getElementById("cowboy1_attack1");
var cowboy1MegaBullet = document.getElementById("cowboy1_attack2");
var cowboy1BulletBull = document.getElementById("cowboy1_attack3");
var cowboy1BulletBlast = document.getElementById("cowboy1_attack4");
//Cowboy 2 attack variables
var cowboy2Bullet = document.getElementById("cowboy2_attack1");
var cowboy2SkyBullet = document.getElementById("cowboy2_attack2");
var cowboy2HugeBullet = document.getElementById("cowboy2_attack3");
var cowboy2SuperBulllet = document.getElementById("cowboy2_attack4");
//drawer variables
var oDrawer = document.getElementById("o-drawer");
var cDrawer = document.getElementById("c-drawer");
//fullscreen variables
var oFullScreen = document.getElementById("o-fullscreen");
var cFullScreen = document.getElementById("c-fullscreen");
//image urls or image links
background.src = "images/background.png";
cowboy1.src = "images/cowboy.png";
cowboy2.src = "images/cowboy2.png";

background.onload = function(){
	//ctx.drawImage("image url", x position, y position, width, height);
	ctx.drawImage(background, 0, 0, cW, cH);
	ctx.drawImage(cowboy1, 95, 156, 150, 150);
	ctx.drawImage(cowboy2, 750, 162, 150, 150);
}
cowboy1.onload = function(){
	ctx.drawImage(background, 0, 0, cW, cH);
	ctx.drawImage(cowboy1, 95, 156, 150, 150);
	ctx.drawImage(cowboy2, 750, 162, 150, 150);
}
cowboy2.onload = function(){
	ctx.drawImage(background, 0, 0, cW, cH);
	ctx.drawImage(cowboy1, 95, 156, 150, 150);
	ctx.drawImage(cowboy2, 750, 162, 150, 150);
}

oFullScreen.onclick = function(){
	if(document.documentElement.requestFullscreen)
		document.documentElement.requestFullscreen();
	else if(document.documentElement.mozRequestFullScreen)
		document.documentElement.mozRequestFullScreen();
}
cFullScreen.onclick = function(){
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
}
//Cowboy 1 or the player 1 attack functions
//Cowboy bullet attack function
function checkHealth(){
	if(health <= 0){
		if(counter == 0){
			counter++;
			alert("Player 2 is dead");
			initialize();
			xpBar1.setAttribute("value", xp += xpadd);
			if(xp == 100){
				levelAdd++;
				alert("Congratulations You are Now Level " + levelAdd);
			}
			counter2++;
		}
		if(counter == 1){
			counter == 2;
		}
		clearInterval(interval1);
	}
}
function initialize(){
	health = 250;
	health2 = 250;
	hp1.setAttribute("value", health);
	hp2.setAttribute("value", health2);

	bullets = 130;
	bullets2 = 150;  	
	bulletBar1.setAttribute("value", bullets);
	bulletBar2.setAttribute("value", bullets2);
	bulletCounter = 0;
	bulletCounter2 = 0;

	attackContainer1.style.opacity = 1;
	attackContainer2.style.opacity = 1;

	counter = 0;
	counter2 = 0;

	interval1 = setInterval(checkHealth, 500);
	interval2 = setInterval(checkHealth2, 500);	

	var xp = 0;
	var xp2 = 0;
	xpBar1.setInterval("value", xp);
	xpBar2.setInterval("value", xp);
}
cowboy1Bullet.onclick = function(){
	if(bulletCounter == 0 && bullets == 0){
		alert("Player 1 You can't use bullet attacks anymore");
		bulletCounter++;
	}
	else{
		/*There are already the variables for hp2.setAttribute()
		the health's value gets subtracted when we click the button by the variable bullet types damage the bullets value is used to subtract so the value is still in the place just the whole variable is called and we can use variables for many times as we want*/
		bulletBar1.setAttribute("value", bullets -= bulletAttack);
		hp2.setAttribute("value", health -= bulletDamage);
		attackContainer1.style.opacity = 0;
		attackContainer2.style.opacity = 1;
	}
}
//Cowboy1 megabullet attack function
cowboy1MegaBullet.onclick = function(){
	if(bulletCounter == 0 && bullets == 0){
		alert("Player 1 You can't use bullet attacks anymore");
		bulletCounter++;
	}
	else{
		bulletBar1.setAttribute("value", bullets -= megaBulletAttack);
		hp2.setAttribute("value", health -= megaBulletDamage);
		attackContainer1.style.opacity = 0;
		attackContainer2.style.opacity = 1;
	}
}
//Cowboy1 bulletblast attack function
cowboy1BulletBlast.onclick = function(){
	if(bulletCounter == 0 && bullets == 0){
		alert("Player 1 You can't use bullet attacks anymore");
		bulletCounter++;
	}
	else{
		bulletBar1.setAttribute("value", bullets -= bulletBlast);
		hp2.setAttribute("value", health -= bulletBlastDamage);
		attackContainer1.style.opacity = 0;
		attackContainer2.style.opacity = 1;
	}
}
//Cowboy1 bulletbull attack function
cowboy1BulletBull.onclick = function(){
	if(bulletCounter == 0 && bullets == 0){
		alert("Player 1 You can't use bullet attacks anymore");
		bulletCounter++;
	}
	else{
		bulletBar1.setAttribute("value", bullets -= bulletBull);
		hp2.setAttribute("value", health -= bulletBullDamage);
		attackContainer1.style.opacity = 0;
		attackContainer2.style.opacity = 1;
	}
}
//Cowboy 2 or the player 2 attack functions
function checkHealth2(){
	if(health2 <= 0){
		if(counter2 == 0){
			counter2++;
			alert("Player 1 is dead");
			xpBar2.setAttribute("value", xp2 += xpadd2);
			initialize();
		}
		if(counter2 == 1 && xp == 100){
			levelAdd2++;
			alert("Congratulations Player 2 You are Now " + levelAdd2);
			counter2++; 
		}
		if(counter2 == 2){
			counter2 == 3;
			clearInterval(interval2);
		}
	}
}
//Cowboy 2 bullet attack function
cowboy2Bullet.onclick = function(){
	if(bulletCounter2 == 0 && bullets2 == 0){
		alert(" Player 2 You have no bullets left to attack anymore");
		bulletCounter2++;
	}
	else{
		bulletBar2.setAttribute("value", bullets2 -= bulletAttack);
		hp1.setAttribute("value", health2 -= bulletDamage);
		attackContainer2.style.opacity = 0;
		attackContainer1.style.opacity = 1;
	}
}
cowboy2SkyBullet.onclick = function(){
	if(bulletCounter2 && bullets2 == 0){
		alert("Player 2 You have no bulllets left to attack anymore");
		bulletCounter2++;
	}
	else{
		bulletBar2.setAttribute("value", bullets2 -= skyBulletAttack);
		hp1.setAttribute("value", health2 -= skyBulletDamage);
		attackContainer2.style.opacity = 0;
		attackContainer1.style.opacity = 1;
	}
}
cowboy2HugeBullet.onclick = function(){
	if(bulletCounter2 == 0 && bullets2 == 0){
		alert("Player 2 You have no bulllets left to attack anymore");
		bulletCounter2++;
	}
	else{
		bulletBar2.setAttribute("value", bullets2 -= hugebulletAttack);
		hp1.setAttribute("value", health2 -= hugeBulletDamage);
		attackContainer2.style.opacity = 0;
		attackContainer1.style.opacity = 1;
	}
}
cowboy2SuperBulllet.onclick   = function(){
	if(bulletCounter2 == 0 && bullets2 == 0){
		alert("Player 2 You have no bulllets left to attack anymore");
		bulletCounter2++;
	}
	else{
		bulletBar2.setAttribute("value", bullets2 -= superBulletAttack);
		hp1.setAttribute("value", health2 -= superBulletDamage);
		attackContainer2.style.opacity = 0;
		attackContainer1.style.opacity = 1;
	}
}
