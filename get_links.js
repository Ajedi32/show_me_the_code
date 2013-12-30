var response = {
	matches: []
};

function responseContains(match) {
	for (var i = 0; i < response.matches.length; ++i) {
		if (match.url == response.matches[i].url) return true;
	}
	return false;
}

var allLinks = document.getElementsByTagName("a");
var i;
for (i = 0; i < allLinks.length; ++i) {
	var link = allLinks[i];
	var destination = link.getAttribute("href");

	var matcherName;
	var match = matchRepo(destination);
	if (match !== null) {
		if (!responseContains(match)) {
			response.matches.push(match);
		}
	}
}

chrome.runtime.sendMessage(response);
