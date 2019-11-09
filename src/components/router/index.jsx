import React, { Component } from 'react'
import {
  HashRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import NewList from './NewList'
import FoodList from './FoodList'
import NewDetail from './NewDetail'
import FoodDetail from './fooddetail'
import NotFound from './NotFound'
class Index extends Component {
  render() {
    return (
      <Router>
        <div className="index">
          <ul>
            <li>
              <Link to="/newlist">新闻</Link>
            </li>
            <li>
              <Link to="/foodlist">美食</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/newlist">
              <NewList />
            </Route>
            <Route path="/foodlist">
              <FoodList />
            </Route>
            <Route path="/newdetail" component={NewDetail} />
            {/* 如果嵌套子路由必须将路由规则写在route里面 否则this.props为空 */}
            {/*  <Route path="/newdetail">
              <NewDetail />
            </Route> */}
            <Route path="/fooddetail/:food" component={FoodDetail} />
            <Redirect exact from="/" to="newlist" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Index
