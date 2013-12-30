chrome.runtime.onMessage.addListener(function(response) {
	if (response !== null && response.matches !== null) {
		var results = document.getElementById("results");
		results.innerHTML = "";

		response.matches.forEach(function(match) {
			results.innerHTML += " " + match[0] + ": " + match[1];
		}, this);
	}
});

document.addEventListener('DOMContentLoaded', function() {
	// Search the page for links to code hosting websites and display them in this popup.
	chrome.tabs.executeScript({
		file: 'get_links.js'
	});
});
