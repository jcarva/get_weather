import React from 'react'
import { WeatherIcons } from '../utils/weatherIcons'
import { WeatherDateParser } from '../utils/weatherDateParser'


var Day = (props) => {
  return(
    <div className="daily-forecast-container col-lg-3 col-centered" style={{backgroundColor: props.background_color}} onClick={props.onClickDetail}>
      <img style={{height: props.icon_size}} src={WeatherIcons[props.day.weather["0"].icon]} alt="daily weather"/>
      <h2>{WeatherDateParser(props.day.dt)}</h2>
    </div>
  )
};

Day.propTypes = {
  day: React.PropTypes.object.isRequired,
  onClickDetail: React.PropTypes.func.isRequired
};

Day.defaultProps = {
  background_color: '#2b81af',
  icon_size: 130
};

export default Day;
