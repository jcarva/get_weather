import React from 'react'
import Forecast from '../components/Forecast'
import { WeatherAPIHelpers } from '../utils/WeatherAPIHelpers'

export default class ForecastContainer extends React.Component {
  render() {
    console.log(this.props);
    return(
      <Forecast
        city={this.props.params.city}
      />
    )
  }
}
