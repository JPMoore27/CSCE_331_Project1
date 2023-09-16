
function switchsheet(){

	var style = document.getElementById("stylesheet");

	var sheetname = style.getAttribute("href");

	if(sheetname == "paper.css") {
		sheetname = "dark.css";
	} else {
		sheetname = "paper.css";
	}

	style.setAttribute("href", sheetname);

	localStorage.setItem("theme", sheetname);
}

window.onload = function(){

	var sheetname = localStorage.getItem("theme");
	
	if(sheetname != null) {
		var style = document.getElementById("stylesheet");
		style.setAttribute("href", sheetname);
	}
}
