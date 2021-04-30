const adviceData = [
{
    name: "Чөлөөт цагаараа уншихад тохиромжтой англи хэл дээр унших 10 ном",
    branch: "Хэл сурах",
    PublishedYear: 2021,
    photo: "images/advice1.png"
},
{
    name: "Хэрэглээний програмууд сурахын давуу тал",
    branch: "Компьютер",
    PublishedYear: 2020,
    photo: "images/advice2.png"
},
{
    name: "Аливаа номыг анхааралтай уншдаг болох нь?",
    branch: "Хичээл",
    PublishedYear: 2017,
    photo: "images/advice3.png"
    },
];

function Ognoo(PublishedYear){
    let calculatedYear = new Date().getFullYear() - PublishedYear;
    if (calculatedYear == 0) {
        return "Саяхан нийтлэгдсэн";
    } else {
        return `${calculatedYear} жилийн өмнө нийтлэгдсэн`;
    }
}

function adviceTitlePage(advice) {
    return `
    <div class = "zuvluguu"> 
    <a href="#">
        <img class = "advice-photo" src = "${advice.photo}">
    </a>
    <a href="#">
        <h2 class = "advice-name">${advice.name} <span class = "branch">(${advice.branch})</span></h2>
    </a>
        <p style="font-size:0.5rem"><strong><i>${Ognoo(advice.PublishedYear)} </i></strong></p>
    </div>
    `
}

document.getElementById("app").innerHTML = `
    <h1 class="app-title">Зөвлөгөө (${adviceData.length} илэрц)</h1> 
    ${adviceData.map(adviceTitlePage).join("")} 
    <p class="footer">2021 он</p>