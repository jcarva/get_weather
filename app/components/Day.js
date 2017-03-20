import React from 'react'
import { WeatherIconsMaterial } from '../utils/weatherIcons'
import { WeatherDateParser } from '../utils/weatherDataParser'

const Day = (props) => {
  const date = WeatherDateParser(props.day.dt);
  return(
    <div className="col-lg-2 day-card-centered">
      <div className="text-center" onClick={props.onClickDetail}>
        <h3>{date[0].substr(0, 3).toUpperCase()}</h3>
        <h3>{date[1]}</h3>
        <img className="img-responsive" style={{height: props.icon_height}} src={WeatherIconsMaterial[props.day.weather['0'].icon]} alt="daily weather"/>
        <div className="day-temperature">
          <h4>{props.day.temp.day} °C</h4>
        </div>
        <div className="max-min-temperature">
          <h4>{props.day.temp.max} °C</h4>
          <h4>{props.day.temp.min} °C</h4>
        </div>
      </div>
    </div>
  )
};

Day.propTypes = {
  day: React.PropTypes.shape({
    dt: React.PropTypes.number.isRequired
  }).isRequired,
  onClickDetail: React.PropTypes.func
};

Day.defaultProps = {
  icon_height: 80
};


export default Day;
