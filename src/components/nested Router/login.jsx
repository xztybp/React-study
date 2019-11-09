import React, { Component } from 'react'
import style from './login.module.css'
class Login extends Component {
  /* 实例属性 */
  state = {
    password: '',
    username: ''
  }
  /* 原型属性 */
  render() {
    const { password, username } = this.state
    return (
      <div className={style.loginBig}>
        <div className={style.loginSmall}>
          <h3>登录</h3>
          <label htmlFor="PASS">昵称: </label>
          <input
            id="PASS"
            type="text"
            name="username"
            value={username}
            onChange={this.changeValue}
          />
          <br />
          <label htmlFor="name">密码: </label>
          <input
            id="name"
            type="password"
            name="password"
            value={password}
            onChange={this.changeValue}
          />
          <br />
          <input type="button" onClick={this.login} value="确定" />
        </div>
      </div>
    )
  }
  /* 改变实例属性值 */
  changeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  /* 登录验证 */
  login = () => {
    let { username, password } = this.state
    console.log(username)
    console.log(+password)

    if (username === 'admin' && +password === 12345) {
      console.log(this.props)

      this.props.history.push('/home')
    }
  }
}
export default Login
