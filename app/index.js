import React from 'react'
import ReactDOM from 'react-dom'

const Live = (props) => {
  return (
    <div>{props.name}</div>
  )
}

class User extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <Live {...this.props}/>
    )
  }
}

ReactDOM.render(<User name="Jota"/>, document.getElementById('app'));
