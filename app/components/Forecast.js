import React from 'react'
import Day from '../components/Day'
import Loading from '../components/Loading'

const ForecastUI = (props) => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-4 col-lg-offset-4">
          <div className="forecast-header">
            <h1>{props.forecastData.city.name}</h1>
            <h2>Select a day to see more details</h2>
          </div>
        </div>
      </div>
      <div className="forecast-container">
        {props.forecastData.list.map(function (forecastDay) {
          return (
            <div className="col-lg-3 col-centered">
              <Day key={forecastDay.dt} day={forecastDay} onClickDetail={props.onClickDetail.bind(null, forecastDay)}/>
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
      <div id="loading">
        <Loading/>
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
