function $(element){
	return document.querySelector(element);
}
var menu = $("#menu");
var menuBtn = $("#menu-btn");
var menuOpen = false;
var dummy = $("#dummy");
var leftBtn = $("#left");
var rightBtn = $("#right");
var carousel = $("#carousel");
var y = 0;
var value = 60;

window.onload = function(){
document.getElementById("scene").style.opacity = 1;
document.getElementById("scene").style.transform = "scale(1, 1)";
}

menuBtn.addEventListener("click", openMenu, false);
$("#menu-btn-hidden").addEventListener("click", openMenu, false);
dummy.addEventListener("click", closeMenu, false);

setInterval(function(){
	y += value;
	carousel.setAttribute("style", "transform: rotateX(-15deg) rotateY(-"+y+"deg);");
}, 1800);

function fullscreen(){
	if(document.documentElement.requestFullscreen)
		document.documentElement.requestFullscreen();
	else if(document.documentElement.webkitRequestFullscreen)
		document.documentElement.webkitRequestFullscreen();
	else if(document.documentElement.mozRequestFullScreen)
		document.documentElement.mozRequestFullScreen();
	else if(document.documentElement.oRequestFullscreen)
		document.documentElement.oRequestFullscreen();
}


//some variables for scroll controlling
var offset = $("#panel-1").offsetTop-100;
var menuBtnCreated = false;


window.addEventListener("scroll", function(){
	if(window.scrollY+offset > $("#panel-3").offsetTop){
		$("#panel-3").style.opacity = 1;
	}
	if(window.scrollY+offset > $("#panel-2").offsetTop){
		$("#panel-2").style.opacity = 1;
	}
	if(window.scrollY+offset > $("#panel-1").offsetTop){
		$("#panel-1").style.opacity = 1;
	}
	//modify the heading and include the menu btn

	if(window.scrollY > 70){
		//here the text will transform to right first then the button will disappear

		$("#title").setAttribute("style", "transform: translateX(45px); font-size: 1.5rem");
		$("#menu-btn-hidden").style.left = "6px";
	}
	else{
		//here the button will disappear first then the text will be transformed to left.
		$("#title").setAttribute("style", "transform: translateX(0px); font-size: 2rem");
		$("#menu-btn-hidden").style.left = "-50px";
	}

	//control the opacity of top btn
	if(window.scrollY+offset > 800){
		$("#top-btn").style.opacity = 1;
	}
	else{
		$("#top-btn").style.opacity = 0;
	}
}, false);

$("#top-btn").onclick = function(){
	var y=window.scrollY;
	var interval = setInterval(function(){
		y-=25;
		window.scroll(0, y);
		if(y <= 0){
			clearInterval(interval);
		}
	}, 10);
}



function openMenu(){
	if(menuOpen == false){
		menu.style.left = "0px";
		dummy.style.display = "block"
		menuOpen = true;
	}
}
function closeMenu(){
	if(menuOpen == true){
		menu.style.left = "-100%";
		menuOpen = false;
		dummy.style.display = "none";	
	}
}

window.onscroll = function(){ alert("window onload"); }
