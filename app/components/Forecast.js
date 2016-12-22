import React from 'react'
import { WeatherIcons } from '../utils/weatherIcons'
import { WeatherDateParser } from '../utils/weatherDateParser'


const DayUI = (props) => {
  return(
    <div className="daily-forecast-container col-lg-3 col-centered" onClick={props.onClickDetail}>
      <img src={WeatherIcons[props.day.weather["0"].icon]} alt="daily weather"/>
      <h2>{WeatherDateParser(props.day.dt)}</h2>
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
            <DayUI key={forecastDay.dt} day={forecastDay} onClickDetail={props.onClickDetail}/>
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
        <ForecastUI forecastData={props.forecastData} onClickDetail={props.onClickDetail}/>
      </div>
    )
  }
};

Forecast.propTypes = {
  city: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  forecastData: React.PropTypes.object.isRequired,
  onClickDetail: React.PropTypes.func.isRequired
};

export default Forecast;
