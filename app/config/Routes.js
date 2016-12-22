import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from '../containers/Main'
import HomeContainer from '../containers/HomeContainer'
import ForecastContainer from '../containers/ForecastContainer'
import DailydDetail from '../components/DailyDetail'

export default class Routes extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={HomeContainer}/>
          <Route path='forecast/:city' component={ForecastContainer} />
          <Route path='detail/:city' component={DailydDetail} />
        </Route>
      </Router>
    )
  }
}
