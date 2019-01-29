
//javascript file to smoothly scroll

function _(element){
	return document.getElementById(element);
}

var homeBtn = _("homeBtn");
var skillsBtn = _("skillsBtn");
var projectsBtn = _("projectsBtn");
var contactBtn = _("contactBtn");
var buttons = document.getElementsByClassName("nav-btn");
var buttons = Array.from(buttons);
var viewMoreBtn = _("view-more-btn");
var topBtn = _("top-btn");

var homeElement = _("home");
var skillsElement = _("skills");
var projectsElement = _("projects");
var contactElement = _("contact");

homeBtn.addEventListener("click", moveToHome, false);
skillsBtn.addEventListener("click", moveToSkills, false);
projectsBtn.addEventListener("click", moveToProjects, false);
contactBtn.addEventListener("click", moveToContact, false);
viewMoreBtn.addEventListener("click", moveToSkills, false);

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
	targetY = projectsElement.offsetTop-50;
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
	clearInterval(interval);
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

//scroll event to update the button styles

topBtn.onmouseover = function(){
	topBtn.style.opacity = 1;
	topBtn.style.cursor = "pointer";
}
window.addEventListener("scroll", function(){

	//control the visibility of top button
	if(window.scrollY > 500){
		topBtn.style.opacity = 0.8;
		topBtn.style.visibility = "visible";
	}
	else{
		topBtn.style.opacity = 0;
		topBtn.style.visibility = "hidden";
	}

	//control styles of navigation buttons
	if(mousedown){
		clearInterval(interval);
		var y = window.scrollY;
		if(y > contactElement.offsetTop-350){
			updateBtn(contactBtn);
		}
		else if(y > projectsElement.offsetTop-5){
			updateBtn(projectsBtn);
		}
		else if(y > skillsElement.offsetTop-4){
			updateBtn(skillsBtn);
		}
		else if(y > homeElement.offsetTop-1){
			updateBtn(homeBtn);
		}
	}
}, false);




viewMoreBtn.addEventListener("click", function(e){
	e.preventDefault();
}, false);


topBtn.addEventListener("click", function(){
	var i=0;
	//clear the previous interval if any
	interval2 = setInterval(function(){
		var y = window.scrollY;
		i++;
		if(y > 10){
			console.log("top btn runngin", i);
			y -= scrollAmount;
			window.scroll(0, y);
		}
		else{
			console.log("cleared");
			clearInterval(interval2);
		}
	}, 10);
}, false);