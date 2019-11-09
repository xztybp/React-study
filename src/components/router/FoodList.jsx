import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class FoodList extends Component {
  render() {
    return (
      <div className="FoodLisT">
        <ul>
          <li>
            <Link to="/fooddetail/吃啥">红烧茄子</Link>
          </li>
          <li>黄焖鸡米饭</li>
          <li>鱼香肉丝</li>
          <li>土豆片</li>
          <li>韭菜鸡蛋</li>
        </ul>
      </div>
    )
  }
}
export default FoodList
