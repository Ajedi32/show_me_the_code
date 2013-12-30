var matchers = {
	"GitHub": function (link) {
		var pattern = /(https?:\/\/(?:www\.)?github.com\/[a-zA-z0-9\-_]+\/[a-zA-z0-9\-_]+)/i;
		var match = pattern.exec(link);
		if (match === null) return null;
		return match[1];
	}
};
