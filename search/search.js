

document.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        console.log("abc");
        alert('Đang tìm kiếm bài hát');
        const search = async () => {
            const data = document.getElementById("search").value
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '6d0a49ad1amsha8da871af40ca9fp1e3017jsn1f71a1fca7a4',
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                }
            };
            var response = ""
                response = await fetch(`https://spotify23.p.rapidapi.com/search/?q=${data}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
                
                back = await response.json()
                console.log(back)





        }
        search()
    }
});

const button = document.getElementById('btn');
button.addEventListener('click', function handleClick() {
    window.location.href = "../Trang Chính/index.html"
});