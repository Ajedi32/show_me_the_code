var response = {
	matches: []
};

var matchers = {
	"GitHub": function (link) {
		var pattern = /(https?:\/\/(?:www\.)?github.com\/[a-zA-z0-9\-_]+\/[a-zA-z0-9\-_]+)/i;
		var match = pattern.exec(link);
		if (match === null) return null;
		return match[1];
	}
};

var allLinks = document.getElementsByTagName("a");
var i;
for (i = 0; i < allLinks.length; ++i) {
	var link = allLinks[i];
	var destination = link.getAttribute("href");

	var matcherName;
	for (matcherName in matchers) {
		var matcher = matchers[matcherName];
		var match = matcher(destination);
		if (match !== null) {
			response.matches.push([matcherName, match]);
		}
	}
}

chrome.runtime.sendMessage(response);