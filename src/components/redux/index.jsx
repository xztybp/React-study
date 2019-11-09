import React, { Component } from 'react'
import Counter from '../redux/counter'
import Show from '../redux/show'
class Index extends Component {
  render() {
    return (
      <div>
        全局状态管理
        <Counter />
        <Show />
      </div>
    )
  }
}
export default Index
