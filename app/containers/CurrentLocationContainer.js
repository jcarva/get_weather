import React from 'react'
import CurrentLocation from '../components/CurrentLocation'

export default class CurrentLocationContainer extends React.Component {
  constructor(props, context) {
    /*
     The 'props' is necessary to use the 'this' inside of the constructor, the component inherits of the React.Component
     */
    super(props, context);

    this.state = {
      city: ''
    };

    /*
     this.context.router is undefined in ES6 class constructor.
     (https://github.com/reactjs/react-router/issues/1059)
     */
    context.router
  }

  handleUpdateCity = (position) => {
    const latitude = position.coords.latitude.toString();
    const longitude = position.coords.longitude.toString();
    this.setState ({
      city: latitude + '$' + longitude
    });
  };

  errorHandler =(err) => {
    if(err.code == 1) {
      alert('Error: Access is denied!');
    }

    else if( err.code == 2) {
      alert('Error: Position is unavailable!');
    }
  };

  handleClickLocation = () => {
    if(navigator.geolocation){
      // timeout at 60000 milliseconds (60 seconds)
      const options = {timeout:60000};
      navigator.geolocation.getCurrentPosition(this.handleUpdateCity, this.errorHandler, options);

      setTimeout(function () {
        if(this.state.city != '') {
          this.context.router.push('/forecast/' + this.state.city)
        }
      }.bind(this),1000);
    }
    else{
      alert('Sorry, browser does not support geolocation!');
    }
  };

  componentDidMount () {
    $(document).ready(function() {
      setTimeout(function () {
        $('[data-toggle="popover"]').popover('show')
      }.bind(this),1000);

      setTimeout(function () {
        $('[data-toggle="popover"]').popover('destroy');
      }.bind(this),7000);
    })
  }
  
  render() {
    return(
      <CurrentLocation
        onClickLocation={this.handleClickLocation}
      />
    )
  }
}

CurrentLocationContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
