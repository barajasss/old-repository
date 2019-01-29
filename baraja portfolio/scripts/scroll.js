
//javascript file to smoothly scroll

var homeBtn = document.getElementById("homeBtn");
var skillsBtn = document.getElementById("skillsBtn");
var projectsBtn = document.getElementById("projectsBtn");
var contactBtn = document.getElementById("contactBtn");
var buttons = document.getElementsByClassName("nav-btn");
var buttons = Array.from(buttons);

var homeElement = document.getElementById("home");
var skillsElement = document.getElementById("skills");
var projectsElement = document.getElementById("projects");
var contactElement = document.getElementById("contact");

homeBtn.addEventListener("click", moveToHome, false);
skillsBtn.addEventListener("click", moveToSkills, false);
projectsBtn.addEventListener("click", moveToProjects, false);
contactBtn.addEventListener("click", moveToContact, false);

var scrollAmount = 20;
var scrollSpeed = 8;
var targetY, currentY;
var interval;

function moveToHome(e){
	mousedown = false;
	updateBtn(homeBtn);
	targetY = homeElement.offsetTop-50;
	interval = setInterval(function(){
		scrollTo(targetY);
	}, scrollSpeed);
}
function moveToSkills(e){
	mousedown = false;
	updateBtn(skillsBtn);
	targetY = skillsElement.offsetTop-20;
	interval = setInterval(function(){
		scrollTo(targetY);
	}, scrollSpeed);
}
function moveToProjects(e){
	mousedown = false;
	updateBtn(projectsBtn);
	targetY = projectsElement.offsetTop-40;
	interval = setInterval(function(){
		scrollTo(targetY);
	}, scrollSpeed);
}
function moveToContact(e){
	mousedown = false;
	updateBtn(contactBtn);
	targetY = contactElement.offsetTop-350;
	interval = setInterval(function(){
		scrollTo(targetY);
	}, scrollSpeed);
}


function updateBtn(elem){
	for(var i in buttons){
		buttons[i].setAttribute("class", "nav-btn");
	};
	elem.setAttribute("class", "active");
}

function scrollTo(tY){
	currentY = window.scrollY;
	cY = Math.floor(currentY);
	rangeMin = tY-15;
	rangeMax = tY+15;
	console.log("current Y: "+cY+", target Y: "+tY+", rangeMin: "+rangeMin+", rangeMax: "+rangeMax);

	if(cY < rangeMin || cY > rangeMax){
		if(cY < tY){
			cY += scrollAmount;
			window.scroll(0, cY);
		}
		else{
			cY -= scrollAmount;
			window.scroll(0, cY);
		}
	}
	else{
		clearInterval(interval);
	}
}

var mousedown = false;
document.addEventListener("mousedown", function(){
	mousedown = true;
}, false);
document.addEventListener("touchmove", function(){
	mousedown = true;
}, false);
window.addEventListener("scroll", function(){
	if(mousedown){
		var y = window.scrollY;
		if(y > contactElement.offsetTop-350){
			console.log("scroll contact btn");
			updateBtn(contactBtn);
		}
		else if(y > projectsElement.offsetTop-50){
			console.log("scroll projects btn");
			updateBtn(projectsBtn);
		}
		else if(y > skillsElement.offsetTop-40){
			console.log("scroll skills btn");
			updateBtn(skillsBtn);
		}
		else if(y > homeElement.offsetTop-10){
			console.log("scroll home btn");
			updateBtn(homeBtn);
		}
	}
}, false);





