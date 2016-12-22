import React from 'react'
import { WeatherIcons } from '../utils/weatherIcons'
import { WeatherDateParser } from '../utils/weatherDateParser'


var Day = (props) => {
  return(
    <div className="daily-forecast-container" style={{backgroundColor: props.background_color}} onClick={props.onClickDetail}>
      <img style={{height: props.icon_height}} src={WeatherIcons[props.day.weather["0"].icon]} alt="daily weather"/>
      <h2>{WeatherDateParser(props.day.dt)}</h2>
    </div>
  )
};

Day.propTypes = {
  day: React.PropTypes.shape({
    dt: React.PropTypes.number.isRequired,
    weather: React.PropTypes.array.isRequired
  }).isRequired,
  onClickDetail: React.PropTypes.func
};

Day.defaultProps = {
  background_color: '#2b81af',
  icon_height: 130
};

export default Day;
