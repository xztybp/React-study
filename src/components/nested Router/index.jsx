import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './home'
import Login from './login'
class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Redirect exact from="/" to="/login" />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Index
