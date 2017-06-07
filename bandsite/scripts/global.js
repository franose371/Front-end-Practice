function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

function highlightPage() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName("nav")) return false;
	var nav = document.getElementsByTagName("nav");
	//get all the links in the navigation
	//这里通过getElementsByTagName方法得到的为数组，所以需要for循环遍历
	var links = new Array();
	for (var j=0; j<nav.length; j++){
		navlinks = nav[j].getElementsByTagName("a");
		for (var k=0; k<navlinks.length; k++){
			links[k] = navlinks[k];
		}
	}
	//var links = nav.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		var linkurl = links[i].getAttribute("href");
		var curenturl = window.location.href;
		if (curenturl.indexOf(linkurl) != -1) {
			links[i].className = "here";
			var linktext = links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id", linktext);
		}
	}
}
addLoadEvent(highlightPage);