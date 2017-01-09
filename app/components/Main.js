import React from 'react'
import Logo  from './Logo'
import GetCityContainer from '../containers/GetCityContainer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
require("../assets/sass/style.css");

const NavigationBar = (props) => {
  return (
    <nav id="navigation-bar" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="glyphicon glyphicon-search"></span>
          </button>
          <Logo title="GetWeather"/>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <GetCityContainer direction="row"/>
        </div>
      </div>
    </nav>
  )
};

export default class Main extends React.Component {
  render() {
    return (
        <div id="main">
          <NavigationBar/>
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
          </ReactCSSTransitionGroup>
        </div>
    )
  }
}
