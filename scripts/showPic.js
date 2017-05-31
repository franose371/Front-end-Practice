function showPic(whichPic){
	//改变图片显示
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	//改变文字显示
	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}