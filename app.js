// http://api.weatherstack.com/current?access_key=d46fa057ddb018313ac1d4be9739ddbe&query=Delhi.
// https://api.unsplash.com/search/collections?page=1&query=office
// access-key = DRKYa4ZpZzIWXhBtth99czcdtwZOapME4jCVj2SS8cg

//? DOM Variables

const cityName = document.getElementById("user-location");
const button = document.getElementById("search");
const container = document.querySelector(".container");
const userCityName = document.querySelector(".spl");
const weatherDescription = document.querySelector(".weather-description")
const temp = document.getElementById("temp");

button.addEventListener("click", getWeather);

async function getWeather(){
    printImage();
    printWeather();
}

async function printImage(){
    const randNum = Math.floor(Math.random() * 5);
    const userCity = cityName.value;
    const unsplashKey = "DRKYa4ZpZzIWXhBtth99czcdtwZOapME4jCVj2SS8cg";
    const img = await axios.get(`https://api.unsplash.com/search/collections?query=${userCity}&client_id=${unsplashKey}`);
    const imgUrl = img.data.results[randNum].preview_photos[0].urls.full;
    document.body.style.background = `url("${imgUrl}")`;
    document.body.style.backgroundSize = "(100%, 100%)";
    userCityName.textContent = userCity;
}

async function printWeather(){
    const weatherKey = "d46fa057ddb018313ac1d4be9739ddbe";
    const userCity = cityName.value;
    const weatherData = await axios.get(`http://api.weatherstack.com/current?access_key=${weatherKey}&query=${userCity}.`);
    const cityTemp = weatherData.data.current.temperature;
    const cityWeatherDesc = weatherData.data.current.weather_descriptions[0];
    weatherDescription.textContent = cityWeatherDesc;
    temp.textContent = `${cityTemp}° C`;
}
