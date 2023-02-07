export const weatherBuilder = (() => {

class Weather {
  constructor(lang, units, city, description, feels_like, humidity, pressure, temp, temp_max, temp_min){
      this.lang = lang,
      this.units = units,
      this.city = city,
      this.description = description,   
      this.feels_like = feels_like,
      this.humidity = humidity,
      this.pressure = pressure,
      this.temp = temp,
      this.temp_max = temp_max,
      this.temp_min = temp_min
  }
} 

const setLanguage = () => {
  
}

const setUnits = () => {
  
}

async function getWeather(looking4, SelLang, SelUnits) {
    try{
      const apiBuilder = `https://api.openweathermap.org/data/2.5/weather?q=${looking4}&lang=${SelLang}&APPID=185125e37a85ebd4704a4ca91e1da8d5&units=${SelUnits}`
      const response = await fetch(apiBuilder, {mode: 'cors'});
      const weatherData = await response.json();
      const neededData = {
          city: weatherData.name,
          description: weatherData.weather[0].description,   
          feels_like: weatherData.main.feels_like,
          humidity: weatherData.main.humidity,
          pressure: weatherData.main.pressure,
          temp: weatherData.main.temp,
          temp_max: weatherData.main.temp_max,
          temp_min: weatherData.main.temp_min
      };
      return neededData   
    } catch (err) {console.error(err)}     
}

async function setWeather (city, SelLang, SelUnits) {
  try {
    const currentData = await getWeather(city, SelLang, SelUnits)
    let currentCity = currentData.city
    let currentDescription = currentData.description;
    let currentFeelsLike = currentData.feels_like;
    let currentHumidity = currentData.humidity;
    let currentPressure = currentData.pressure;
    let currentTemp = currentData.temp;
    let currentTempMax = currentData.temp_max;
    let currentTempMin = currentData.temp_min;
    const currentWeather = new Weather(currentCity, currentDescription, currentFeelsLike, currentHumidity, currentPressure, currentTemp, currentTempMax, currentTempMin);
    console.log(currentWeather)
    return currentWeather
  } catch (err) {console.error(err)}   
  
}

return {setWeather, setLanguage, setUnits }
})()