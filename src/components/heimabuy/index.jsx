import React, { Component } from 'react'
import ShopList from './ShopList'
import BuyCarList from './BuyCarList'
import style from '../heimabuy/index.module.css'
/* 导入仓库管理 */
import store from './redux/createStore'
import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
class Index extends Component {
  /* 添加实例属性 */
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  /* 添加实例方法 */
  totalshopList = () => {
    let totalCount = 0
    store.getState().forEach(item => {
      totalCount += item.num
    })
    this.setState({
      count: totalCount
    })
  }
  /* 钩子函数 */
  componentDidMount() {
    this.totalshopList()
    /* 实时更新仓库中的值 */
    this.unsubscribe = store.subscribe(() => {
      this.totalshopList()
    })
    /* 刷新页面时及关闭页面前   执行 */
    window.onbeforeunload = () => {
      window.localStorage.setItem('myCart', JSON.stringify(store.getState()))
    }
  }
  /* 钩子函数 */
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    return (
      <Router>
        <div>
          <div className={style.header}>
            <h1>黑马商城</h1>
          </div>
          <div className={style.nav}>
            <Link to="shopList">商品列表</Link>&nbsp;&nbsp;
            <Link to="buycarList">购物车</Link>
            {this.state.count >= 0 && this.state.count}
          </div>
          <Switch>
            <Route path="/shopList" component={ShopList} />
            <Route path="/buycarList" component={BuyCarList} />
            <Redirect from="/" to="shopList"></Redirect>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Index
