import React, { Component } from 'react'
/* 导入全局状态管理 */
import store from './redux/createStore'
import { updatanumGoodS, deldatanumGoodS } from './redux/createAction'
import { Table, Button, InputNumber, Modal } from 'antd'
const { confirm } = Modal
class BuyCarList extends Component {
  constructor() {
    super()
    this.state = {
      shopList: store.getState()
    }
    /* 给每项数据添加唯一的key值 */
    this.state.shopList.forEach(item => {
      item.key = item.id
    })
  }
  /* 给实例添加属性 */
  columns = [
    {
      title: '水果',
      dataIndex: 'name',
      rowKey: 'name'
    },
    {
      title: '图片',
      dataIndex: 'url',
      rowKey: 'url',
      render: url => {
        return <img src={url} style={{ width: 100, height: 100 }} alt={''} />
      }
    },
    {
      title: '数量',
      rowKey: 'num',
      render: ({ num, id }) => {
        return (
          <InputNumber
            min={1}
            defaultValue={num}
            onChange={num => {
              this.onChange(num, id)
            }}
          />
        )
      }
    },
    {
      title: '单价',
      dataIndex: 'price',
      rowKey: 'price'
    },
    {
      title: '总价',
      rowKey: 'total',
      render: ({ num, price }) => {
        return <span>{num * price}</span>
      }
    },
    {
      title: '操作',
      rowKey: 'action',
      render: item => {
        return (
          <Button
            type="primary"
            onClick={e => {
              this.delData(item)
            }}
          >
            删除
          </Button>
        )
      }
    }
  ]
  /* 给实例添加点击事件 */
  onChange = (num, id) => {
    console.log(this.state.shopList)
    /* 通过dispatch(action)方法更新state,即dispatch发出命令,将action放到纯函数中,得到新的state */
    store.dispatch(updatanumGoodS({ num, id }))
  }
  /* 给实例添加删除方法 */
  delData = item => {
    confirm({
      title: '温馨提示?',
      content: '是否确认删除?',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        store.dispatch(deldatanumGoodS(item))
      },
      onCancel() {}
    })
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.state.shopList.forEach(item => {
        item.key = item.id
      })
      this.setState({
        shopList: store.getState()
      })
    })
  }
  componentWillUnmount() {
    console.log(11111)
    this.unsubscribe()
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Table
          columns={this.columns}
          dataSource={this.state.shopList}
          pagination={false}
          autoFocus={true}
        ></Table>
      </div>
    )
  }
}
export default BuyCarList
