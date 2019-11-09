import React, { Component } from 'react'
class Fooddetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      food: props.match.params.food /* params传参 */
    }
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <h1>西红柿炒鸡蛋会吗 {this.state.food}</h1>
      </div>
    )
  }
}
export default Fooddetail
