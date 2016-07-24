import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from '../containers/Main'
import HomeContainer from '../containers/HomeContainer'

export default class Routes extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={HomeContainer}/>
        </Route>
      </Router>
    )
  }
}
