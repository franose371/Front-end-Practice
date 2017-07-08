//the element to set the class, the value of the class
function addClass(element,value){
	if (!element.className) {
		element.className = value;
	} else{
		newClassName = element.className;
		newClassName+= " ";
		newClassName+= value;
		element.className = newClassName;
	}
}