import React from 'react'
import Forecast from '../components/Forecast'
import { WeatherAPIHelper } from '../utils/weatherAPIHelper'

export default class ForecastContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoadingForecast: true,
      isLoadingWeather: true,
      forecastData: {},
      weatherData: {}
    };

    /*
     this.context.router is undefined in ES6 class constructor.
     (https://github.com/reactjs/react-router/issues/1059)
     */
    context.router
  }

  handleClickDetail = (e) => {
    if(this.props.routeParams.city != '') {
      this.context.router.push({
        pathname: '/detail/' + this.props.routeParams.city,
        state: {
          weather: e,
          city: this.state.forecastData.city.name
        }
      })
    }
  };

  forecastRequest = (city) => {
    WeatherAPIHelper.getCityForecast(city)
      .then(function (cityForecastData) {
        this.setState({
          isLoadingForecast: false,
          forecastData: cityForecastData
        });
      }.bind(this))
  };

  weatherRequest = (city) => {
    WeatherAPIHelper.getCurrentCityWeather(city)
      .then(function (cityWeatherData) {
        this.setState({
          isLoadingWeather: false,
          weatherData: cityWeatherData
        });
      }.bind(this))
  };

  componentDidMount () {
    setTimeout(function () { //Only for case study
      this.forecastRequest(this.props.routeParams.city);
      this.weatherRequest(this.props.routeParams.city);
    }.bind(this),1000);
  }

  componentWillReceiveProps (nextProps) {
    this.forecastRequest(nextProps.routeParams.city)
  }

  render() {
    return(
      <Forecast
        isLoadingForecast={this.state.isLoadingForecast}
        isLoadingWeather={this.state.isLoadingWeather}
        forecastData={this.state.forecastData}
        weatherData={this.state.weatherData}
        onClickDetail={this.handleClickDetail}
      />
    )
  }
}
/*
 using ES6+, specify contextTypes in class
 (http://blog.revathskumar.com/2016/02/reactjs-writing-in-es6.html)
 */
ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
