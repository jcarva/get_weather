import React from 'react'
import GetCityContainer from './GetCityContainer'
import Logo  from '../components/Logo'
require("../assets/sass/style.css");

const Menu = (props) => {
  return (
    <div id="menu">
      <Logo title="Get Weather"/>
      <GetCityContainer direction="row"/>
    </div>
  )
};

export default class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Menu/>
        {this.props.children}
      </div>
    )
  }
}
