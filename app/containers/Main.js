import React from 'react'
require("../assets/sass/style.css");

const Live = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Live name="Jota"/>
        {this.props.children}
      </div>
    )
  }
}
