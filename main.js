var canv = document.getElementById("slate");
var clearb = document.getElementById("clear");
var shapeDrawn = false;
var oldX = 0;
var oldY = 0;

var draw = function(e) {
	var x = e.offsetX;
	var y = e.offsetY;
	
	var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circ.setAttribute("cx", x +"");
	circ.setAttribute("cy", y+"");
	circ.setAttribute("r", "20");
	circ.setAttribute("stroke", "#000000");
	circ.setAttribute("fill", "lightsteelblue");
	canv.appendChild(circ);
	
	if (shapeDrawn){
		
		lin = document.createElementNS("http://www.w3.org/2000/svg","line");
		lin.setAttribute("x1", oldX+"");
		lin.setAttribute("y1", oldY+"");
		lin.setAttribute("x2", x+"");
		lin.setAttribute("y2", y+"");
		lin.setAttribute("stroke", "#000000");
		lin.setAttribute("stroke-width", "3");
		canv.appendChild(lin);
		
	}
	else{
		shapeDrawn = true;
	}
	
	oldX = x;
	oldY = y;
};


canv.addEventListener('click', draw, true);

var clear = function() {
    canv.innerHTML="";
	shapeDrawn = false;
};

clearb.addEventListener('click', clear);