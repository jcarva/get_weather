import React from 'react'
import GetCity from '../components/GetCity'

export default class GetCityContainer extends React.Component {
  /*
   Instead of providing a separate getInitialState
   method, you can set up your own state property in the constructor.
   (https://facebook.github.io/react/docs/reusable-components.html)
  */
  constructor(props, context) {
    /*
     The 'props' is necessary to use the 'this' inside of the constructor, the component inherits of the React.Component
    */
    super(props, context);

    this.state = {
      city: 'San Diego, California'
    };

    /*
     this.context.router is undefined in ES6 class constructor.
     (https://github.com/reactjs/react-router/issues/1059)
    */
    context.router
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
