import { ADD, MINUS } from './createType'

/* action  动作,为一个对象  包含两个参数 type  */
/* 调用方法 返回action对象,将type属性值更改为常量*/
export const add = count => {
    return {
        type: ADD,
        count
    }
}
export const minus = count => {
    return {
        type: MINUS,
        count
    }
}

/* 异步action不能直接操作仓库中的数据,要最终调用同步的action才能到reducers里面更改仓库中的数据 ,此时的action为箭头函数*/

export const asyncadd = count => {
    return dispatch => {
        setTimeout(() => {
            dispatch(add(count))
        }, 2000);
    }
}

export const asyncminus = count => {
    return dispatch => {
        setTimeout(() => {
            dispatch(minus(count))
        }, 2000);
    }
}