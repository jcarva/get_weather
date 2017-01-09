import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import ForecastContainer from '../containers/ForecastContainer'
import DetailedDayContainer from '../containers/DetailedDayContainer'

export default class Routes extends React.Component {
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home}/>
          <Route path='forecast/:city' component={ForecastContainer} />
          <Route path='detail/:city' component={DetailedDayContainer} />
        </Route>
      </Router>
    )
  }
}
