chrome.extensions.onMessage.addListener($imgDiv,downloadImage());

function downloadImage() {
	for (var i = 0, length1 = $imgDiv.length; i < length1; i++) {
		chrome.downloads.download({
			url: $imgDiv[i].src,
			filename: "pixiv.jpg",
			saveAs: false
		},{});

	}

}