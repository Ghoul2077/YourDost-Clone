let navbar = document.getElementsByTagName("nav")[0];

window.onload = function(){
	window.scrollTo(0,0);
}


window.onscroll = function(){
	"use strict";
	if(document.documentElement.scrollTop >= 70){
		navbar.style.backgroundColor = "white";
		navbar.height = "50px";
		navbar.style.boxShadow = "1px 1px 5px black";
	}
	else{
		navbar.style.backgroundColor = "transparent";
		navbar.height = "70px";
		navbar.style.boxShadow = "none";
	}
}