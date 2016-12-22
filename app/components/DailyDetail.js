import React from 'react'
import DayUI from '../components/Day'

var DetailDecription = (props) => {
  return(
    <div className="row">
      <h3><b>Description:</b> {props.weather.weather[0].description}</h3>
      <h3><b>Min temperature:</b> {props.weather.temp.min} °C</h3>
      <h3><b>Max temperature:</b> {props.weather.temp.max} °C</h3>
      <h3><b>Humidity:</b> {props.weather.humidity}</h3>
    </div>
  )
};

var DailyDetail = (props) => {
  return(
    <div className="container">
      <div className="row text-center">
        <h1 className="forecast-header">{props.city}</h1>
        <div className="col-centered">
          <DayUI day={props.weather} background_color="#fff" icon_height={180}/>
          <DetailDecription weather={props.weather}/>
        </div>
      </div>
    </div>
  )
};

export default DailyDetail;
