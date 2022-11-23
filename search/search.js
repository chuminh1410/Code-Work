

document.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        alert('Đang tìm kiếm bài hát');
        const search = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '6d0a49ad1amsha8da871af40ca9fp1e3017jsn1f71a1fca7a4',
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                }
            };
            const data = document.getElementById("search").value
            var response = ""
           
                response = await fetch(`https://spotify81.p.rapidapi.com/search?q=${data}&type=tracks&offset=0&limit=10&numberOfTopResults=5`, options)
                back = await response.json()
                console.log(response)
                songs = back.tracks
                document.getElementById("return").innerHTML = ""
                songs.forEach(result => {
                    console.log(result.back.albumOfTrack)
                });
            





        }
    }
});

const button = document.getElementById('btn');
button.addEventListener('click', function handleClick() {
    window.location.href = "http://127.0.0.1:5501/Trang%20Ch%C3%ADnh/index.html#"
});