import React from 'react'

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
      </div>
    )
  }
}
