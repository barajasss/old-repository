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
		dummy.style.display = "block"
		menuOpen = true;
	}
}, false);

dummy.addEventListener("click", function(){
	if(menuOpen == true){
		menu.style.left = "-100%";
		menuOpen = false;
		dummy.style.display = "none";	
	}
}, false);

setInterval(function(){
	y += value;
	carousel.setAttribute("style", "transform: rotateX(-15deg) rotateY("+y+"deg);");
}, 2000);
