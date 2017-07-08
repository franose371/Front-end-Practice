function prepareSlideshow() {
	//Make sure the browser understands the DOM methods
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");

	var preview = document.createElement("img");
	preview.setAttribute("src","img/topics.png");
	preview.setAttribute("alt","building blocks of web design");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);

	var list = document.getElementById("linklist");
	insertAfter(slideshow,list);
	//Make sure the element exists
	if (!document.getElementById("linklist")) return false;
	if (!document.getElementById("preview")) return false;
	//Apply style to the preview image 
	var preview = document.getElementById("preview");
	preview.style.position = "absolute";
	//Get all the links in the list
	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName("a");
	//Attach the animation behavior to the mouseover event
	links[0].onmouseover = function() {
		moveElement("preview",-62.5,0,10);
	}
	links[1].onmouseover = function() {
		moveElement("preview",-125,0,10);
	}
	links[2].onmouseover = function() {
		moveElement("preview",-187.5,0,10);
	}
}

addLoadEvent(prepareSlideshow);