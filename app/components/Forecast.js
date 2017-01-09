import React from 'react'
import Day from '../components/Day'
import Loading from '../components/Loading'
import { WeatherTimeParser, UpperCaseFirst } from '../utils/weatherDataParser'
import { WeatherIconsMaterial } from '../utils/weatherIcons'

const ForecastCard = (props) => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-12">
          <div className="forecast-header">
            <h1>{props.weatherData.main.temp} °C in {props.weatherData.name}</h1>
              <h2>{UpperCaseFirst(props.weatherData.weather[0].description)}</h2>
              <img className="img-responsive" style={{height: 60}} src={WeatherIconsMaterial[props.weatherData.weather["0"].icon]} alt="daily weather"/>
            <table style={{width: "100%"}}>
              <tbody>
              <tr>
                <td><h2>Sunrise: {WeatherTimeParser(props.weatherData.sys.sunrise)}</h2></td>
                <td><h2>Sunset: {WeatherTimeParser(props.weatherData.sys.sunset)}</h2></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="forecast-container-wrapper">
        <h2>Select a day to see more details</h2>
        <div className="forecast-container">
          {props.forecastData.list.map(function (forecastDay) {
            return <Day key={forecastDay.dt} day={forecastDay} onClickDetail={props.onClickDetail.bind(null, forecastDay)}/>
          })}
        </div>
      </div>
    </div>
  )
};

const Forecast = (props) => {
  if (props.isLoadingForecast || props.isLoadingWeather) {
    return (
      <div id="loading">
        <Loading/>
      </div>
    )
  } else {
    return (
      <div id="forecast">
        <ForecastCard weatherData={props.weatherData} forecastData={props.forecastData} onClickDetail={props.onClickDetail}/>
      </div>
    )
  }
};

Forecast.propTypes = {
  isLoadingForecast: React.PropTypes.bool.isRequired,
  isLoadingWeather: React.PropTypes.bool.isRequired,
  forecastData: React.PropTypes.object.isRequired,
  weatherData: React.PropTypes.object.isRequired,
  onClickDetail: React.PropTypes.func.isRequired
};

export default Forecast;
