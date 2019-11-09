import { ADD, MINUS } from './createType'
/* 纯函数  给定固定的输入得到固定的输出*/
export default (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + action.count
        case MINUS:
            return state - action.count
        default:
            return state
    }
}