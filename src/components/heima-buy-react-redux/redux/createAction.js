import { ADD_GOODS, UPDATANUM_GOODS, DELDATANUM_GOODS } from '../redux/actionType'
/* 创建一个action对象 */
export const addGoodS = goods => {
    return {
        type: ADD_GOODS,
        payload: goods
    }
}
export const updatanumGoodS = goods => {
    return {
        type: UPDATANUM_GOODS,
        payload: goods
    }
}
export const deldatanumGoodS = goods => {
    return {
        type: DELDATANUM_GOODS,
        payload: goods
    }
}
