import Axios from 'axios'

var base_url_api = 'http://api.openweathermap.org/data/2.5';
var api_key = '1c03cb992b00253b570f4d85483502fc';

function getCurrentCityWeather(city) {
  return Axios.get(base_url_api + "/weather?q=" + city + "&type=accurate&APPID=" + api_key)
}

export const WeatherAPIHelpers = {
  getCurrentCityWeather: getCurrentCityWeather
}
