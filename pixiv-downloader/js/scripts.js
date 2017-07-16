var html = $("html").html();

var regPre = /https:\/\/i\.pximg\.net\/c\/600x600\/img\-master\/img\/\d{4}\/\d{2}\/\d{2}\/\d{2}\/\d{2}\/\d{2}\/\d{8}_p0_master1200\.jpg/;

resultSrc = regPre.exec(html);

//use variables to query elements
var $imgDiv = $("[src= " + "'" + resultSrc + "'" + "]");

var $button = document.createElement("button");

var $button_wrapper = document.createElement("div");
$button_wrapper.classList.add("pixiv-download-wrapper");

$button.classList.add("pixiv-download-button");
$($button).text("download");

$button_wrapper.appendChild($button);


//.bookmark-container
var bookmark = $(".bookmark-container")
bookmark[0].childNodes[0].before($button_wrapper);

var $download = $(".pixiv-download-button")[0];

// // var images = $("body").find("img");

var isClick = false;

var imageDownload = {
	isclick: isClick,
	imgsrc: $imgDiv[0].src
};

$download.addEventListener("click", function(){
	isClick = true;
	chrome.runtime.sendMessage(imageDownload, function(response) {
		console.log('from content scripts');
	});
}, false);