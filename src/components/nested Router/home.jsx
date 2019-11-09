import React, { Component } from 'react'
import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import NewList from '../nested Router/newList'
import YuleList from '../nested Router/yuleList'
import TiyuList from '../nested Router/tiyuList'
class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <h3>首页</h3>
          <ul>
            <li>
              <Link to="/home/newList">新闻</Link>
            </li>
            <li>
              <Link to="/home/yuleList">娱乐</Link>
            </li>
            <li>
              <Link to="/home/tiyuList">体育</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/home/newList" component={NewList} />
            <Route path="/home/yuleList" component={YuleList} />
            <Route path="/home/tiyuList" component={TiyuList} />
            <Redirect exact from="/home" to="home/newlist" />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Home
