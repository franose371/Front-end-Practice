function displayCitations() {
	if (!document.getElementsByTagName || !document.createElement 
		|| !document.createTextNode)
	return false;
	var quotes = document.getElementsByTagName("blockquote");
	for (var i=0; i<quotes.length; i++){
		if (!quotes[i].getAttribute("cite")) continue;
		//excute only when the cite attribute exists
		var url = quotes[i].getAttribute("cite");
		//return all the elements in quotes[i]
		var quoteChildren = quotes[i].getElementsByTagName("*");
		if (quoteChildren.length < 1) continue;
		//the last element of quoteChildren
		var elem = quoteChildren[quoteChildren.length - 1];
		//create the markup
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);
	}
}

addLoadEvent(displayCitations);