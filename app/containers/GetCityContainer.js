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
    this.setState ({
     city: e.target.value
    });
  };

  handleSubmitCity = (e) => {
    e.preventDefault();
    if(this.state.city != '') {
      this.context.router.push('/forecast/' + this.state.city)
    }
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
/*
 using ES6+, specify defaultProps in class
 (http://blog.revathskumar.com/2016/02/reactjs-writing-in-es6.html)
 */
GetCityContainer.defaultProps = {
  direction: 'column'
};

/*
 using ES6+, specify contextTypes in class
 (http://blog.revathskumar.com/2016/02/reactjs-writing-in-es6.html)
 */
GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
