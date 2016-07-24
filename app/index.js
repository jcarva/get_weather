import React from 'react'
import ReactDOM from 'react-dom'

const Live = (props) => {
  return (
    <div>
      {props.name}
      <input
        type="text"
        onChange={props.onUpdateUser}
        value={props.username}
      />

    </div>
  )
}

class User extends React.Component {
  constructor(props){
    super(props);

    this.state = {username: ''};
  }

  handleUpdateUser = (e) => {
    this.setState({username: e.target.value});
  }

  render() {
    return (
      <div>
        <Live {...this.props} onUpdateUser={ this.handleUpdateUser } />
      </div>
    )
  }
}

ReactDOM.render(<User name="Jota"/>, document.getElementById('app'));
