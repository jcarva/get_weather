import React from 'react'
import DetailedDay from '../components/DetailedDay'

export default class DailyDetailContainer extends React.Component {
  render() {
    return(
      <DetailedDay
        weather={this.props.location.state.weather}
        city={this.props.location.state.city}
      />
    )
  }
}
