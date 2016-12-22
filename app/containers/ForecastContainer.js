import React from 'react'
import Forecast from '../components/Forecast'
import { WeatherAPIHelper } from '../utils/weatherAPIHelper'

export default class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      forecastData: {}
    }
  }

  forecastRequest = (city) => {
    WeatherAPIHelper.getCityForecast(city)
      .then(function (cityForecastData) {
        this.setState({
          isLoading: false,
          forecastData: cityForecastData
        });
      }.bind(this))
  };

  componentDidMount () {
    this.forecastRequest(this.props.routeParams.city)
  }

  componentWillReceiveProps (nextProps) {
    this.forecastRequest(nextProps.routeParams.city)
  }

  render() {
    return(
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
      />
    )
  }
}
