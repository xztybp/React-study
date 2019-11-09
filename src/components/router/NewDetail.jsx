import React, { Component } from 'react'
class NewDetail extends Component {
  constructor(props) {
    super(props)
    let searchParams = new URLSearchParams(
      props.location.search
    ) /* query传参方式 */
    this.state = {
      id: searchParams.get('id')
    }
    console.log(this.state.id) /* 111 */
    console.log(this.props)
  }
  render() {
    return (
      <div className="NewDetail">
        <h1>创业楷模罗荣浩{this.state.id}</h1>
        <h1>{this.props.history.length}</h1>
      </div>
    )
  }
  componentDidMount() {
    /* 页面被挂载时执行 */
    console.log(this.props)
  }
}
export default NewDetail
