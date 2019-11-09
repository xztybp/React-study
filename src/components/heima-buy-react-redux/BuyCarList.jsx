import React, { Component } from 'react'
/* 导入全局状态管理 */
import { connect } from 'react-redux'
import { updatanumGoodS, deldatanumGoodS } from './redux/createAction'
import { Table, Button, InputNumber, Modal } from 'antd'
const { confirm } = Modal
class BuyCarList extends Component {
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
              this.props.onChange(num, id)
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
              this.props.delData(item)
            }}
          >
            删除
          </Button>
        )
      }
    }
  ]
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Table
          columns={this.columns}
          dataSource={this.props.shopList}
          pagination={false}
          autoFocus={true}
        ></Table>
      </div>
    )
  }
}
const mapStateToProps = state => {
  state.forEach(item => {
    item.key = item.id
  })
  return {
    shopList: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    /* 修改 */
    onChange(num, id) {
      dispatch(
        updatanumGoodS({ num, id })
      ) /* 通过dispatch(action)方法更新state,即dispatch发出命令,将action放到纯函数中,得到新的state */
    },
    /* 删除 */
    delData(item) {
      confirm({
        title: '温馨提示?',
        content: '是否确认删除?',
        okText: '确定',
        cancelText: '取消',
        onOk() {
          dispatch(deldatanumGoodS(item))
        },
        onCancel() {}
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyCarList)
