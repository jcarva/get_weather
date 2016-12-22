import React from 'react'
import DailyDetail from '../components/DailyDetail'

export default class DailyDetailContainer extends React.Component {
  render() {
    return(
      <DailyDetail
        weather={this.props.location.state.weather}
        city={this.props.location.state.city}
      />
    )
  }
}
