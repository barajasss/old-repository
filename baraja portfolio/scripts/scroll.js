
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
	updateBtn(homeBtn);
	targetY = homeElement.offsetTop-50;
	interval = setInterval(function(){
		scrollTo(targetY);
	}, scrollSpeed);
}
function moveToSkills(e){
	updateBtn(skillsBtn);
	targetY = skillsElement.offsetTop-20;
	interval = setInterval(function(){
		scrollTo(targetY);
	}, scrollSpeed);
}
function moveToProjects(e){
	updateBtn(projectsBtn);
	targetY = projectsElement.offsetTop-40;
	interval = setInterval(function(){
		scrollTo(targetY);
	}, scrollSpeed);
}
function moveToContact(e){
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