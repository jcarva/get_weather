import React from 'react'
import { WeatherIcons } from '../utils/weatherIcons'
import { WeatherDateParser } from '../utils/weatherDateParser'

var UpperCaseFirst = (text) => text.charAt(0).toUpperCase() + text.substr(1);

const DetailDay = (props) => {
  var date = WeatherDateParser(props.day.dt);
  return(
    <div className="daily-forecast-container" style={{backgroundColor: props.background_color}}>
      <h3>{date[0] + ', ' + date[1]}</h3>
      <img className="img-responsive" style={{height: props.icon_height}} src={WeatherIcons[props.day.weather["0"].icon]} alt="daily weather"/>
    </div>
  )
};

const DetailDecription = (props) => {
  return(
    <div className="row">
      <h4><b>Description:</b> {UpperCaseFirst(props.weather.weather[0].description)}</h4>
      <h4><b>Min:</b> {props.weather.temp.min} °C</h4>
      <h4><b>Max:</b> {props.weather.temp.max} °C</h4>
      <h4><b>Humidity:</b> {props.weather.humidity}</h4>
    </div>
  )
};

const DailyDetail = (props) => {
  return(
    <div id="daily-detail" className="text-center">
        <div className="col-lg-6 col-lg-offset-3">
          <div className="card">
            <h1 className="forecast-daily-header">{props.city}</h1>
            <div className="col-centered">
              <DetailDay day={props.weather} icon_height={60}/>
              <DetailDecription weather={props.weather}/>
            </div>
          </div>
       </div>
    </div>
  )
};

DetailDay.propTypes = {
  day: React.PropTypes.shape({
    dt: React.PropTypes.number.isRequired,
    weather: React.PropTypes.array.isRequired
  }).isRequired
};

DetailDay.defaultProps = {
  background_color: 'rgb(0,0,0,255)',
  icon_height: 110
};

export default DailyDetail;
