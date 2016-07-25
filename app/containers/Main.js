import React from 'react'
require("../assets/sass/style.css");

const Live = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Live title="Weather App"/>
        {this.props.children}
      </div>
    )
  }
}
