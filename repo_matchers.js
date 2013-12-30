/*
* An object representing a code repository on a specific website.
*/
function Repository(site_name, url, repo_name) {
	this.site_name = site_name; // The name of the website hosting the repository (E.g. 'GitHub')
	this.url = url;             // The URL of the repository
	this.repo_name = repo_name; // Optional. The name of the repository (E.g. 'ajedi32/show_me_the_code')
}

/*
* A list of functions which match URLs for various code hosting websites. Each
* function takes a url, and returns a Repository object, or null if no match is
* found for the given url.
*/
RepoMatchers = {
	"GitHub": function (link) {
		var pattern = /(https?:\/\/(?:www\.)?github.com\/([a-zA-z0-9\-_]+\/[a-zA-z0-9\-_]+))/i;
		var match = pattern.exec(link);
		if (match === null) return null;

		return new Repository("GitHub", match[1], match[2]);
	}
};

// Loop through all RepoMatchers until a match is found for the given url.
function matchRepo(url) {
	var matcherName;
	for (matcherName in RepoMatchers) {
		var matcher = RepoMatchers[matcherName];

		var match = matcher(destination);
		if (match !== null) {
			return match;
		}
	}
	return null;
}
