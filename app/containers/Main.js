import React from 'react'
import GetCityContainer from './GetCityContainer'
require("../assets/sass/style.css");

const Menu = (props) => {
  return (
    <div id="menu">
      <h1>{props.title}</h1>
      <GetCityContainer direction="row"/>
    </div>
  )
}

export default class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Menu title="Weather App"/>
        {this.props.children}
      </div>
    )
  }
}
