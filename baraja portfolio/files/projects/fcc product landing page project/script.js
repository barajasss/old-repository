function $(element){
	return document.querySelector(element);
}
var featuresBtn = $("#features-btn");
var productsBtn = $("#products-btn");
var contactsBtn = $("#contacts-btn");
var card = $("#card");

card.onclick = function(){
	window.location.href = "#dummy";
}
featuresBtn.onclick = function(){
	window.location.href="#features-div";
}
productsBtn.onclick = function(){
	window.location.href="#products-div";
}
contactsBtn.onclick = function(){
	window.location.href="#contacts-div";
}







var visible = [0, 0, 0];
var height = "60px";

var detailsBtn = document.getElementsByClassName("details-btn");
detailsBtn = Array.from(detailsBtn);
var display = document.getElementsByClassName("display");
detailsBtn[0].onclick = function(){
	if(visible[0] == 0){
		display[0].style.height = height;
		detailsBtn[0].innerHTML = "Hide Details";
		visible[0] = 1;
	}
	else{
		display[0].style.height = "0px";
		detailsBtn[0].innerHTML = "More Details";
		visible[0] = 0;
	}
}
detailsBtn[1].onclick = function(){
	if(visible[1] == 0){
		display[1].style.height = height;
		detailsBtn[1].innerHTML = "Hide Details";
		visible[1] = 1;
	}
	else{
		display[1].style.height = "0px";
		detailsBtn[1].innerHTML = "More Details";
		visible[1] = 0;
	}
}
detailsBtn[2].onclick = function(){
	if(visible[2] == 0){
		display[2].style.height = height;
		detailsBtn[2].innerHTML = "Hide Details";
		visible[2] = 1;
	}
	else{
		display[2].style.height = "0";
		detailsBtn[2].innerHTML = "More Details";
		visible[2] = 0;
	}
}


//top btn
var footer = document.getElementsByTagName("footer")[0].lastChild.previousSibling;
footer.addEventListener("click", function(){
	console.log("click");
	window.location.href = "#dummy";
}, false);