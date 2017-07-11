var $button = document.createElement("button");
$button.classList.add("btn");
$button.classList.add("btn-sm");
$button.classList.add("btn-default");
$button.classList.add("pixiv-download-button");

var $wrapper = document.createElement("div");
$wrapper.className = "wrapper";
$("img").wrap($wrapper);

$(".wrapper")[0].appendChild($button);



var $download = $(".pixiv-download-button")[0];

$download.addEventListener("click", downloadImage, false);

function downloadImage() {
	var $images = $("img");
	for (var i = 0, length1 = $images.length; i < length1; i++) {
		var a = $("<a></a>").attr("href", $images[0].src).attr("download", "img.png").appendTo("body");

		a[0].click();
		a.remove();
	}

}

$(".wrapper").mouseover(function() {
	$(".pixiv-download-button").css("display", "block");
});
$(".wrapper").mouseout(function() {
	$(".pixiv-download-button").css("display", "none");
});