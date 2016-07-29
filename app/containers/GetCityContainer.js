import React from 'react'
import GetCity from '../components/GetCity'

export default class GetCityContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
  }

  handleUpdateCity = (e) => {
    this.state = {
     city: e.target.value
    }
  };

  handleSubmitCity = (e) => {
    e.preventDefault();
    console.log(this.state.city);
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
