import React from 'react'
import { WeatherIcons } from '../utils/WeatherIcons'

const DayUI = (props) => {
  return(
    <div className="daily-forecast-container col-lg-3 col-centered">
      <img src={WeatherIcons[props.day.weather["0"].icon]} alt="daily weather"/>
      <h2>{props.day.dt}</h2>
    </div>
  )
};

const ForecastUI = (props) => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 id="forecast-header">{props.forecastData.city.name}</h1>
      </div>
      <div className="forecast-container">
        {props.forecastData.list.map(function (forecastDay) {
          return (
            <DayUI key={forecastDay.dt} day={forecastDay}/>
          )
        })}
      </div>
    </div>
  )
};

const Forecast = (props) => {
  if (props.isLoading) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    )
  } else {
    return (
      <div id="forecast">
        <ForecastUI forecastData={props.forecastData}/>
      </div>
    )
  }
};

Forecast.propTypes = {
  city: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  forecastData: React.PropTypes.object.isRequired
};

export default Forecast;
