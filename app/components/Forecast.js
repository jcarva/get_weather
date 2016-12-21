import React from 'react'

const DayUI = (props) => {
  return(
    <div style={{margin: 35}}>
      <img src={"http://www.freeiconspng.com/uploads/rain-cloud-icon-5.png"} alt="daily weather"/>
      <h2>{props.day.dt}</h2>
    </div>
  )
};

const ForecastUI = (props) => {
  return (
    <div>
      <h1>{props.forecastData.city.name}</h1>
      <div>
        {props.forecastData.list.map(function (forecastDay) {
          return (
            <DayUI day={forecastDay}/>
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
    console.log(props);
    return (
      <div>
        <ForecastUI forecastData={props.forecastData}/>
      </div>
    )
  }
};

Forecast.propTypes = {
  city: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  forecastData: React.PropTypes.object.isRequired
};

export default Forecast;
