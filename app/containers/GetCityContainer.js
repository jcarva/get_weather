import React from 'react'
import GetCity from '../components/GetCity'
import { WeatherAPIHelpers } from '../utils/WeatherAPIHelpers'

export default class GetCityContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
  }

  handleUpdateCity = (e) => {
    this.setState ({
     city: e.target.value
    });
  };

  handleSubmitCity = (e) => {
    e.preventDefault();
    console.log('getCurrentCityWeather :', WeatherAPIHelpers.getCurrentCityWeather(this.state.city));
    console.log('getCityForecast :', WeatherAPIHelpers.getCityForecast(this.state.city));
  };

  render(){
    return(
      <GetCity
        city = {this.state.city}
        direction = {this.props.direction}
        onUpdateCity = {this.handleUpdateCity}
        onSubmitCity = {this.handleSubmitCity}
      />
    )
  };
}

GetCityContainer.defaultProps = {
  direction: 'column'
};
