
var movement;


function positionMessage() {
	if (!document.getElementById) return false;
	if (!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "10em";
	elem.style.top = "20em";
	moveElement("message",20,30,20);
	if (!document.getElementById("message2")) return false;
	var elem = document.getElementById("message2");
	elem.style.position = "absolute";
	elem.style.left = "5em";
	elem.style.top = "15em";
	moveElement("message2",20,30,20);
}

addLoadEvent(positionMessage);

// function moveMessage() {
// 	if (!document.getElementById) return false;
// 	if (!document.getElementById("message")) return false;
// 	var elem = document.getElementById("message");
// 	var xpos = parseInt(elem.style.left);
// 	var ypos = parseInt(elem.style.top);
// 	if (xpos == 30 && ypos == 20) return true;
// 	if (xpos < 30) xpos++;
// 	if (xpos > 30) xpos--;
// 	if (ypos < 20) ypos++;
// 	if (ypos > 20) ypos--;
// 	elem.style.left = xpos + "em";
// 	elem.style.top = ypos + "em";
// 	var repeat = "moveElement('"+elementID+"', )"
// 	movement = setTimeout("moveMessage()",10);
// }

function moveElement(elementID,final_x,final_y,interval){
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) return true;
	if (xpos < final_x) xpos++;
	if (xpos > final_x) xpos--;
	if (ypos < final_y) ypos++;
	if (ypos > final_y) ypos--;
	elem.style.left = xpos + "em";
	elem.style.top = ypos + "em";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	movement = setTimeout(repeat,interval);
}