import React from 'react'
import DayUI from '../components/Day'
import { SingleComponentContainer } from '../components/Containers'

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
    <div id="daily-detail">
      <SingleComponentContainer>
        <div className="col-lg-6 col-lg-offset-3">
          <div className="card">
            <h1 className="forecast-daily-header">{props.city}</h1>
            <div className="col-centered">
              <DayUI day={props.weather} background_color="rgb(0,0,0,255)" icon_height={180}/>
              <DetailDecription weather={props.weather}/>
            </div>
          </div>
       </div>
      </SingleComponentContainer>
    </div>
  )
};

export default DailyDetail;
