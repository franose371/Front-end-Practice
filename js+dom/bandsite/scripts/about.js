function showSection(id) {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementsByTagName("section")) return false;
	var sections = document.getElementsByTagName("section");
	for (var i=0; i<sections.length; i++) {
		if (sections[i].getAttribute("id") != id) {
			sections[i].style.display = "none";
		} else {
			sections[i].style.display = "block";
		}
	}
}

function prepareInterNav() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("internalnav")) return false;
	var nav = document.getElementById("internalnav");
	var links = nav.getElementsByTagName("a");
	for (var i=0; i<links.length; i++) {
		//get the section id without #
		var sectionId = links[i].getAttribute("href").split("#")[1];
		if (!document.getElementById(sectionId)) continue;
		document.getElementById(sectionId).style.display = "none";
		links[i].destination = sectionId;
		links[i].onclick = function() {
			showSection(this.destination);
			return false;
		}
	}
}

addLoadEvent(prepareInterNav);