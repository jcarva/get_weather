import React from 'react'
import DayUI from '../components/Day'

const ForecastUI = (props) => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="forecast-header">{props.forecastData.city.name}</h1>
        <h3>Select a day to see more details</h3>
      </div>
      <div className="forecast-container">
        {props.forecastData.list.map(function (forecastDay) {
          return (
            <div className="col-lg-3 col-centered">
              <DayUI key={forecastDay.dt} day={forecastDay} onClickDetail={props.onClickDetail.bind(null, forecastDay)}/>
            </div>
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
