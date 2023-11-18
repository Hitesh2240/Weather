let city = document.getElementById("City");
let type = document.getElementById("type");
let temp = document.getElementById("Temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "cf1a5d649b6ffe51e14f6b31aab2dbe8";

const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=Metric`)
    console.log(getData);
    let jsonData = await getData.json()
    console.log(jsonData)
    console.log(jsonData.name)
    city.innerHTML=search
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;
    if (type.innerHTML == "Clouds") {
        image.src = "img/cloud.jpg";
    } else if (type.innerHTML == "Clear") {
        image.src = "img/clear.jpeg";
    } else if (type.innerHTML == "Snow") {
        image.src = "img/Snow.jpg";
    } else if (type.innerHTML == "Rain") {

        image.src = "img/Rain.png";

    } else if (type.innerHTML == "Storm"){
        image.scr="img/Storm.png"
    } else if (type.innerHTML == "Haze"){
        image.src="img/Haze.png"
    } else if (type.innerHTML == "Smoke"){
        image.src="img/smoke.png"
    }
    else {

        image.src = "img/default.jpg";

    }


}
function myFunc(){
    search=input.value;
    data(search)
}