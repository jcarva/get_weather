import React from 'react'
import DayUI from '../components/Day'

const ForecastUI = (props) => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 id="forecast-header">{props.forecastData.city.name}</h1>
      </div>
      <div className="forecast-container">
        {props.forecastData.list.map(function (forecastDay) {
          return (
            <DayUI key={forecastDay.dt} day={forecastDay} onClickDetail={props.onClickDetail.bind(null, forecastDay)}/>
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
  isLoading: React.PropTypes.bool.isRequired,
  forecastData: React.PropTypes.object.isRequired,
  onClickDetail: React.PropTypes.func.isRequired
};

export default Forecast;
