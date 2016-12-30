import React from 'react'
import GetCityContainer from '../containers/GetCityContainer'
import Logo  from './Logo'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
require("../assets/sass/style.css");

const Menu = (props) => {
  return (
    <div id="menu">
      <Logo title="GetWeather"/>
      <GetCityContainer direction="row"/>
    </div>
  )
};

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div id="navigation-bar">
        <Menu/>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
