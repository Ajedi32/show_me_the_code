chrome.runtime.onMessage.addListener(function(response) {
	if (response !== null && response.matches !== null) {
		var results = document.getElementById("results");

		response.matches.forEach(function(match) {
			var listItem = document.createElement("li");

			var link = document.createElement("a");
			if (match.repo_name === undefined) {
				link.textContent = match.site_name;
			} else {
				link.textContent = match.repo_name + " (" + match.site_name + ")";
			}
			link.setAttribute("href", match.url);
			link.setAttribute("target", "_blank");

			listItem.appendChild(link);
			results.appendChild(listItem);
		}, this);
	}
});

document.addEventListener('DOMContentLoaded', function() {
	var results = document.getElementById("results");
	results.innerHTML = "";

	// Search the page for links to code hosting websites and display them in this popup.
	chrome.tabs.executeScript({
		file: 'repo_matchers.js'
	});
	chrome.tabs.executeScript({
		file: 'get_links.js'
	});
});
