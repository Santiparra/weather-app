/* 185125e37a85ebd4704a4ca91e1da8d5 */


const img = document.querySelector('img');
const searchForm = document.getElementById("search");
const searchTerm = document.getElementById("searchTerm");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(searchTerm.value)
});  

 async function getWeather(looking4) {
    const apiBuilder = `https://api.openweathermap.org/data/2.5/weather?q=${looking4}&APPID=185125e37a85ebd4704a4ca91e1da8d5`
    const response = await fetch(apiBuilder, {mode: 'cors'});
    const weatherData = await response.json();
    const neededData = {
        feels_like: weatherData.main.feels_like,
        humidity: weatherData.main.humidity,
        pressure: weatherData.main.pressure,
        temp: weatherData.main.temp,
        temp_max: weatherData.main.temp_max,
        temp_min: weatherData.main.temp_min
    }
     console.log(neededData) 
  }  
  
