import React from 'react'
import Day from '../components/Day'

var UpperCaseFirst = (text) => text.charAt(0).toUpperCase() + text.substr(1);

var DetailDecription = (props) => {
  return(
    <div className="row">
      <h3><b>Description:</b> {UpperCaseFirst(props.weather.weather[0].description)}</h3>
      <h3><b>Min:</b> {props.weather.temp.min} °C</h3>
      <h3><b>Max:</b> {props.weather.temp.max} °C</h3>
      <h3><b>Humidity:</b> {props.weather.humidity}</h3>
    </div>
  )
};

var DailyDetail = (props) => {
  return(
    <div id="daily-detail" className="text-center">
        <div className="col-lg-6 col-lg-offset-3">
          <div className="card">
            <h1 className="forecast-daily-header">{props.city}</h1>
            <div className="col-centered">
              <Day day={props.weather} background_color="rgb(0,0,0,255)" icon_height={60}/>
              <DetailDecription weather={props.weather}/>
            </div>
          </div>
       </div>
    </div>
  )
};

export default DailyDetail;
