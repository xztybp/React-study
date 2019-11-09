import React, { Component } from 'react'
import store from './redux/createStore'
import { add, minus, asyncadd, asyncminus } from './redux/createAction'
class Counter extends Component {
  render() {
    return (
      <div>
        <div>
          同步:
          <button onClick={this.add}>+</button>&nbsp;&nbsp;
          <button onClick={this.minus}>-</button>
        </div>
        <div>
          异步:
          <button onClick={this.asyncadd}>+</button>&nbsp;&nbsp;
          <button onClick={this.asyncminus}>-</button>
        </div>
      </div>
    )
  }
  add = () => {
    console.log(store)

    store.dispatch(
      add(5)
    ) /* 更改仓库中的值,调用远程仓库对象dispatch方法,传入一个对象 */

    /* store对象 {liftedStore: {…}, dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, …} */
    /* dispatch: ƒ e(n)
      getState: ƒ f()
      liftedStore: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
      replaceReducer: ƒ (n)
      subscribe: ƒ subscribe(listener)
      Symbol(observable): ƒ ()
       __proto__: Object */
  }
  minus = () => {
    store.dispatch(minus(5))
  }
  asyncadd = () => {
    store.dispatch(asyncadd(5))
  }
  asyncminus = () => {
    store.dispatch(asyncminus(5))
  }
}
export default Counter
