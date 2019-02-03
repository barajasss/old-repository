function $(el){
	return document.getElementById(el);
}
var menuBtn = $("menu-btn");
var menu = $("menu");
var menuOpen = false;

var introductionBtn = $("introduction-btn");
var boxModelBtn = $("box-model-btn");
var dimensionsBtn = $("dimensions-btn");
var marginAndPaddingBtn = $("margin-and-padding-btn");
var colorsBtn = $("colors-btn");
var typographyBtn = $("typography-btn");
var css3Btn = $("css-3-btn");
var flexboxesBtn = $("flexboxes-btn");
var gridsBtn = $("grids-btn");

menuBtn.onclick = function(){
	if(menuOpen){
		menu.style.height = "60px";
		menuBtn.style.backgroundColor = "#ddd";
	}
	else{
		menu.style.height = "345px";
		menuBtn.style.backgroundColor = "#fff";
	}
	menuOpen = !menuOpen;
}
window.addEventListener("resize",  function(){
	if(window.innerWidth > 500){
		menu.style.height = "100%";
	}
	else{
		menu.style.height = "60px";
		menuOpen = false;
		menuBtn.style.backgroundColor = "#ddd";
	}
}, false);






//div#content

introductionBtn.onclick = function(){
	moveTo("#introduction");
	select("#introduction-btn");
}
boxModelBtn.onclick = function(){
	moveTo("#box-model");
	select("#box-model-btn");
}
dimensionsBtn.onclick = function(){
	moveTo("#dimensions");
	select("#dimensions-btn");
}
marginAndPaddingBtn.onclick = function(){
	moveTo("#margin-and-padding");
	select("#margin-and-padding-btn");
}
colorsBtn.onclick = function(){
	moveTo("#colors");
	select("#colors-btn");
}
typographyBtn.onclick = function(){
	moveTo("#typography");
	select("#typography-btn");
}
css3Btn.onclick = function(){
	moveTo("#css-3");
	select("#css-3-btn");
}
flexboxesBtn.onclick = function(){
	moveTo("#flexboxes");
	select("#flexboxes-btn");
}
gridsBtn.onclick = function(){
	moveTo("#grids");
	select("#grids-btn");
}



function moveTo(target){
	window.location.href = target;
}
function select(el){
	var element = document.querySelector(el);
	var el = document.getElementsByClassName("option");
	console.log(el);
	for(var i=0; i<el.length; i++){
		el[i].setAttribute("class", "option");
	}
	element.setAttribute("class", "active option");
}