chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

		chrome.downloads.download({
			url: "http://img.zcool.cn/community/05e5e1554af04100000115a8236351.jpg",
			filename: "pixiv.jpg",
			saveAs: true
		});
});

// function downloadImage() {
// 	for (var i = 0, length1 = $imgDiv.length; i < length1; i++) {
// 		chrome.downloads.download({
// 			url: $imgDiv[i].src,
// 			filename: "pixiv.jpg",
// 			saveAs: false
// 		}, {});

// 	}

// }

		// chrome.downloads.download({
		// 	url: message.imgsrc,
		// 	filename: "pixiv.jpg",
		// 	saveAs: true
		// });