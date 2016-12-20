import Axios from 'axios'

var base_url_api = 'http://api.openweathermap.org/data/2.5/';
var api_key = '1c03cb992b00253b570f4d85483502fc';

var setQueryData = (city) => {
  return {
    q: city,
    type: 'accurate',
    APPID: api_key,
    cnt: 5
  }
};

var queryDataParser = (queryStringData) => {
  return Object.keys(queryStringData).map(function (key) {
    return key + '=' + encodeURIComponent(queryStringData[key]);
  }).join('&')
};

var setUrl = (query_type, queryStringData) => {
  return base_url_api + query_type + '?' + queryDataParser(queryStringData);
}

var getCurrentCityWeather = (city) => {
  return Axios.get(setUrl('weather', setQueryData(city)))
    .then(function (currentWeatherData) {
      console.log(currentWeatherData.data)
    })
};

export const WeatherAPIHelpers = {
  getCurrentCityWeather: getCurrentCityWeather
};
