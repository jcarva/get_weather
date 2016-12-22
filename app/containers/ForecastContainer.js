import React from 'react'
import Forecast from '../components/Forecast'
import { WeatherAPIHelper } from '../utils/weatherAPIHelper'

export default class ForecastContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      forecastData: {}
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
        state: { weather: e }
      })
    }
  };

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
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
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
