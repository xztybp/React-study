import React, { Component } from 'react'
import store from './redux/createStore'
class Show extends Component {
  /*  constructor() {
    super() */
  /* this. */ state = {
    count: store.getState() /* 获取仓库中的值 */
  }

  componentDidMount() {
    /* 实时更新仓库中的值 */
    store.subscribe(() => {
      this.setState({
        count: store.getState()
      })
    })
  }
  render() {
    return <div>仓库的值:{this.state.count}</div>
  }
}
export default Show
