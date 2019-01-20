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
menuBtn.addEventListener("click", function(){
	if(menuOpen == false){
		menu.style.left = "0px";
		dummy.style.height = "100vh";
		dummy.style.width = "100vw";
		menuOpen = true;
	}
}, false);

dummy.addEventListener("click", function(){
	if(menuOpen == true){
		menu.style.left = "-100%";
		menuOpen = false;
		dummy.style.height = "0vh";
		dummy.style.width = "0vw";		
	}
}, false);

leftBtn.onclick = function(){
	y += value;
	carousel.setAttribute("style", "transform: rotateX(-15deg) rotateY("+y+"deg);");
}
rightBtn.onclick = function(){
	y -= value;
	carousel.setAttribute("style", "transform: rotateX(-15deg) rotateY("+y+"deg);");
}
