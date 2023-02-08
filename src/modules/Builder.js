export const weatherBuilder = (() => {

  class Weather {
    constructor(city, country ,description, feels_like, humidity, pressure, temp, temp_max, temp_min){
        this.city = city,
        this.country = country,
        this.description = description,   
        this.feels_like = feels_like,
        this.humidity = humidity,
        this.pressure = pressure,
        this.temp = temp,
        this.temp_max = temp_max,
        this.temp_min = temp_min
    }
  } 

  async function getWeather(looking4) {
      try{
        const apiBuilder = `https://api.openweathermap.org/data/2.5/weather?q=${looking4}&lang=es&APPID=185125e37a85ebd4704a4ca91e1da8d5&units=metric`
        const response = await fetch(apiBuilder, {mode: 'cors'});
        if (!response.ok) throw new Error(`${looking4} no es una ciudad válida`) 
        const weatherData = await response.json();        
        const neededData = {
            city: weatherData.name,
            country: weatherData.sys.country,
            description: weatherData.weather[0].description,   
            feels_like: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            temp: weatherData.main.temp,
            temp_max: weatherData.main.temp_max,
            temp_min: weatherData.main.temp_min,         
        };
        return neededData   
      } catch (error) {alert(error)}     
  }

  async function setWeather (city) {
    try {
      const currentData = await getWeather(city)
      let currentCity = currentData.city
      let currentCountry = currentData.country
      let currentDescription = currentData.description;
      let currentFeelsLike = currentData.feels_like;
      let currentHumidity = currentData.humidity;
      let currentPressure = currentData.pressure;
      let currentTemp = currentData.temp;
      let currentTempMax = currentData.temp_max;
      let currentTempMin = currentData.temp_min;
      const currentWeather = new Weather(currentCity, currentCountry ,currentDescription, currentFeelsLike, currentHumidity, currentPressure, currentTemp, currentTempMax, currentTempMin);
      return currentWeather
    } catch (err) {console.error(err)}     
  }

return {setWeather}

})()