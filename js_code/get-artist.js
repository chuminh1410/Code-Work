const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "6d0a49ad1amsha8da871af40ca9fp1e3017jsn1f71a1fca7a4",
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});