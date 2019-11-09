import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class NewList extends Component {
  render() {
    return (
      <div className="NewLisT">
        <ul>
          <li>
            <Link to="/newdetail/?id=1111">罗荣浩限制高消费</Link>
          </li>
          <li>小米手机</li>
          <li>华为手机</li>
          <li>苹果手机</li>
        </ul>
      </div>
    )
  }
}
export default NewList
