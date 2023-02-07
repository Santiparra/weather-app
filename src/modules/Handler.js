const showWeather = document.getElementById("show-Weather");

export class Weather {
  constructor(description, feels_like, humidity, pressure, temp, temp_max, temp_min){
      this.description = description,   
      this.feels_like = feels_like,
      this.humidity = humidity,
      this.pressure = pressure,
      this.temp = temp,
      this.temp_max = temp_max,
      this.temp_min = temp_min
  }
} 

const img = document.querySelector('img');
const searchForm = document.getElementById("search");
const searchTerm = document.getElementById("searchTerm");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(searchTerm.value)
});  

export async function getWeather(looking4) {
    try{
      const apiBuilder = `https://api.openweathermap.org/data/2.5/weather?q=${looking4}&lang=sp&APPID=185125e37a85ebd4704a4ca91e1da8d5&units=metric`
      const response = await fetch(apiBuilder, {mode: 'cors'});
      const weatherData = await response.json();
      const neededData = {
          description: weatherData.weather[0].description,   
          feels_like: weatherData.main.feels_like,
          humidity: weatherData.main.humidity,
          pressure: weatherData.main.pressure,
          temp: weatherData.main.temp,
          temp_max: weatherData.main.temp_max,
          temp_min: weatherData.main.temp_min
      };
      console.log(neededData)    
    } catch (err) {console.error(err)}     
}

export const setWeather = (neededData) => {
  let currentDescription = neededData.description;
  let currentFeelsLike = neededData.feels_like;
  let currentHumidity = neededData.humidity;
  let currentPressure = neededData.pressure;
  let currentTemp = neededData.temp;
  let currentTempMax = neededData.temp_max;
  let currentTempMin = neededData.temp_min;
  const currentWeather = new Weather(currentDescription, currentFeelsLike, currentHumidity, currentPressure, currentTemp, currentTempMax, currentTempMin);
  console.log(currentWeather)    
}
setWeather(getWeather("Montevideo"))