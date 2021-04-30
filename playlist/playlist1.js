const playlistData = [
    {
        name: "Ядарсан үед сонсож болох тайвшруулах дууны жагсаалт",
        branch: "Дуу",
        PublishedYear: 2021,
        photo: "images/play1.jpg",
        text: ""
    },
    {
        name: "Байгалийн дуу чимээг хэдэн янз гэдгийг олж мэдээрэй",
        branch: "Хөгжим",
        PublishedYear: 2020,
        photo: "images/play2.jpg",
        text: ""
    },
    {
        name: "Symphonic metal урсгалын талаар",
        branch: "Мэдээ",
        PublishedYear: 2017,
        photo: "images/play3.jpg",
        text: ""
        },
    {
        name: "Symphonic metal урсгалын талаар",
        branch: "Мэдээ",
        PublishedYear: 2017,
        photo: "images/play3.jpg",
        text: ""
    },
    {
        name: "Symphonic metal урсгалын талаар",
        branch: "Мэдээ",
        PublishedYear: 2017,
        photo: "images/play3.jpg",
        text: ""
    }
    ];
    
    function Ognoo(PublishedYear){
        let calculatedYear = new Date().getFullYear() - PublishedYear;
        if (calculatedYear == 0) {
            return "Саяхан нийтлэгдсэн";
        } else {
            return `${calculatedYear} жилийн өмнө нийтлэгдсэн`;
        }
    }
    
    function playlistTitlePage(playlist) {
        return `
        <div class = "tsugluulga"> 
        <a href="#">
            <img class = "playlist-photo" src = "${playlist.photo}">
        </a>
        <a href="#">
            <h2 class = "playlist-name">${playlist.name} <span class = "branch">(${playlist.branch})</span></h2>
        </a>
        <p class = "title-text">${playlist.text}</p>
            <p style="font-size:0.5rem"><strong><i>${Ognoo(playlist.PublishedYear)} </i></strong></p>
        </div>
        `
    }
    
    document.getElementById("app").innerHTML = `
        <h1 class="app-title">Playlists(${playlistData.length} илэрц)</h1> 
        ${playlistData.map(playlistTitlePage).join("")} 
        <p class="footer">2021 он</p>