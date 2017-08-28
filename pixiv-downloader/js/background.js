chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

	chrome.downloads.download({
		url: "http://img.zcool.cn/community/05e5e1554af04100000115a8236351.jpg",
		filename: "pixiv.jpg",
		saveAs: true
	});
});

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {
			cancel: details.url.indexOf("://www.evil.com/") != -1
		};
	}, {
		urls: ["http://www.pixiv.net/*", "https://www.pixiv.net/*"]
	}, ["blocking", "requestHeaders"]);