const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "6d0a49ad1amsha8da871af40ca9fp1e3017jsn1f71a1fca7a4",
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});