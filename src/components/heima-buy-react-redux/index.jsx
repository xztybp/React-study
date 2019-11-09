import React, { Component } from 'react'
import ShopList from './ShopList'
import BuyCarList from './BuyCarList'
import style from '../heimabuy/index.module.css'
/* 导入仓库管理 */
import { connect } from 'react-redux'
import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
class Index extends Component {
  /* 钩子函数 */
  componentDidMount() {
    /* 刷新页面时及关闭页面前执行 */
    window.onbeforeunload = () => {
      window.localStorage.setItem('myCart', JSON.stringify(this.props.shopList))
    }
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
            {this.props.count >= 0 && this.props.count}
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
/* 初始化及仓库中的值变化了都会执行 */
const mapStateToProps = state => {
  const totalshopList = () => {
    let totalCount = 0
    state.forEach(item => {
      totalCount += item.num
    })
    return totalCount
  }
  return {
    count: totalshopList(),
    shopList: state
  }
}
export default connect(mapStateToProps)(Index)
