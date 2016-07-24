import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../components/Main'

export default class Routes extends React.Component {
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
      </Router>
    )
  }
}
