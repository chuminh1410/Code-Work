
const search = async () => {


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6d0a49ad1amsha8da871af40ca9fp1e3017jsn1f71a1fca7a4',
			'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
		}
	};
	var response = ""
	response = await fetch('https://spotify23.p.rapidapi.com/search/?q=closer&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));



		songs.forEach(element => {


			console.log(element);


			var name = element.name

			var imgLink = element.thumbnail


			title = document.createElement('h1')
			img = document.createElement('img')


			title.innerHTML = name

			img.src = imgLink




			document.getElementById('main').appendChild(title)
			document.getElementById('main').appendChild(img)

		});




}
