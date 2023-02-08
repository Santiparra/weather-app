import { weatherBuilder } from "./Builder"

export const populateDom = (() => {

  const showCity = document.getElementById("city")
  const showDescription = document.getElementById("condition")
  const showFeelsLike = document.getElementById("feelsLike")
  const showHumidity = document.getElementById("humidity")
  const showPressure = document.getElementById("pressure")
  const showTemp = document.getElementById("temp")
  const showTempMax = document.getElementById("tempMax")
  const showTempMin = document.getElementById("tempMin")

  async function render (weatherValue) {
    try {
      const currentWeather = await weatherBuilder.setWeather(weatherValue)
      showCity.textContent = `${currentWeather.city}, ${currentWeather.country}`
      showTemp.textContent = `${currentWeather.temp} ºC`
      showDescription.textContent = currentWeather.description;
      showFeelsLike.textContent = `Sensación térmica: ${currentWeather.feels_like} ºC`;
      showHumidity.textContent = `Humedad: ${currentWeather.humidity} %`;
      showPressure.textContent = `Presión atmosférica: ${currentWeather.pressure} hPa`;
      showTempMax.textContent = `Temperatura máxima: ${currentWeather.temp_max} ºC`;
      showTempMin.textContent = `Temperatura mínima: ${currentWeather.temp_min} ºC`;
    } catch (err) {console.error(err)}
}

return {render}
})()
