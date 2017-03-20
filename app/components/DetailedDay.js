import React from 'react'
import { WeatherIcons } from '../utils/weatherIcons'
import { WeatherDateParser, UpperCaseFirst } from '../utils/weatherDataParser'

const DetailDay = (props) => {
  const date = WeatherDateParser(props.day.dt);
  return(
    <div className="daily-forecast-container" style={{backgroundColor: props.background_color}}>
      <h3>{date[0] + ', ' + date[1]}</h3>
      <img className="img-responsive" style={{height: props.icon_height}} src={WeatherIcons[props.day.weather['0'].icon]} alt="daily weather"/>
    </div>
  )
};

const DetailDecription = (props) => {
  return(
    <div className="row">
      <h3>{UpperCaseFirst(props.weather.weather[0].description)}</h3>
      <div className="col-lg-4 col-lg-offset-4">
        <table className="center" style={{width: '100%'}}>
          <tbody>
            <tr>
              <td><h4><b>Min:</b></h4></td>
              <td><h4> {props.weather.temp.min} °C</h4></td>
            </tr>
            <tr>
              <td><h4><b>Max:</b></h4></td>
              <td><h4> {props.weather.temp.max} °C</h4></td>
            </tr>
            <tr>
              <td><h4><b>Morning:</b></h4></td>
              <td><h4> {props.weather.temp.morn} °C</h4></td>
            </tr>
            <tr>
              <td><h4><b>Evening:</b></h4></td>
              <td><h4> {props.weather.temp.eve} °C</h4></td>
            </tr>
            <tr>
              <td><h4><b>Night:</b></h4></td>
              <td><h4> {props.weather.temp.night} °C</h4></td>
            </tr>
            <tr>
              <td><h4><b>Humidity:</b></h4></td>
              <td><h4> {props.weather.humidity}%</h4></td>
            </tr>
            <tr>
              <td><h4><b>Wind Speed:</b></h4></td>
              <td><h4> {(props.weather.speed * 3.6).toFixed(2)} Km/h</h4></td>
            </tr>
          </tbody>
        </table>
      </div>
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
