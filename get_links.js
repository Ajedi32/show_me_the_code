var response = {
	matches: []
};

var allLinks = document.getElementsByTagName("a");
var i;
for (i = 0; i < allLinks.length; ++i) {
	var link = allLinks[i];
	var destination = link.getAttribute("href");

	var matcherName;
	var match = matchRepo(destination);
	if (match !== null) {
		response.matches.push(match);
	}
}

chrome.runtime.sendMessage(response);
