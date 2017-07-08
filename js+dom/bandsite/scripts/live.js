function highlightRows() {
	if (!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for (var i=0; i<rows.length; i++){
		rows[i].oldClassName = rows[i].className;
		rows[i].onmouseover = function(){
			addClass(this,"highlight");
		}
		rows[i].onmouseout = function() {
			this.className = this.oldClassName;
		}
	}
}

addLoadEvent(highlightRows);

function stripeTables() {
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	for (var i=0; i<tables.length; i++) {
		var odd = false;
		var rows = tables[i].getElementsByTagName("tr");
		for (var j=0; j<rows.length; j++) {
			if (odd == true) {
				addClass(rows[j],"odd");
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}

addLoadEvent(stripeTables);

function displayAbbreviations() {
	if (!document.getElementsByTagName ||!document.createElement 
		|| !document.createTextNode) 
		return false;
	//get all the abbreviations
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	//loop through the abbreviations
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i]
		if (current_abbr.childNodes.length < 1) continue;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	//create the definition list
	var dlist = document.createElement("dl");
	//loop through the definitions
	for (key in defs){
		var definition = defs[key];
		//create the definition title
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//create the definition description
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//add them to the definition list
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;
	//create a headline
	var header = document.createElement("h2")
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//add the headline to the body
	document.body.appendChild(header);
	//add the definition list to the body
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
