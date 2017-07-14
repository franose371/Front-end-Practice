var html = $("html").html();

var regPre = /https:\/\/i\.pximg\.net\/c\/600x600\/img\-master\/img\/\d{4}\/\d{2}\/\d{2}\/\d{2}\/\d{2}\/\d{2}\/\d{8}_p0_master1200\.jpg/;

resultSrc = regPre.exec(html);

//use variables to query elements
var $imgDiv = $("[src= " + "'" + resultSrc + "'" + "]");

var $button = document.createElement("button");
$button.classList.add("btn");
$button.classList.add("btn-sm");
$button.classList.add("btn-default");
$button.classList.add("pixiv-download-button");
$($button).text("download");

var $wrapper = document.createElement("div");
$wrapper.className = "pixiv-wrapper";
$imgDiv.wrap($wrapper);


$(".pixiv-wrapper")[0].appendChild($button);



var $download = $(".pixiv-download-button")[0];

var images = $("body").find("img");


$(".pixiv-wrapper").mouseover(function() {
	$(".pixiv-download-button").css("display", "block");
});
$(".pixiv-wrapper").mouseout(function() {
	$(".pixiv-download-button").css("display", "none");
});

$download.addEventListener("click", function(){
	chrome.extension.sendMessage($imgDiv.src);
}, false);