import { weatherBuilder } from "./modules/Builder";

export const populateDom = (() => {

const showCity = document.getElementById("city")
const showDescription = document.getElementById("description")
const showFeelsLike = document.getElementById("feelsLike")
const showHumidity = document.getElementById("humidity")
const showPressure = document.getElementById("pressure")
const showTemp = document.getElementById("temp")
const showTempMax = document.getElementById("tempMax")
const showTempMin = document.getElementById("tempMin")

async function render (weatherValue) {
  const currentWeather = await weatherBuilder.setWeather(weatherValue)
  console.log(currentWeather.city)
  showCity.textContent = currentWeather.city
  showDescription.textContent = currentWeather.description;
  showFeelsLike.textContent = currentWeather.feelsLike;
  showHumidity.textContent = currentWeather.humidity;
  showPressure.textContent = currentWeather.pressure;
  showTemp.textContent = currentWeather.temp;
  showTempMax.textContent = currentWeather.temp_max;
  showTempMin.textContent = currentWeather.temp_min;
}
return {render}
} )()
