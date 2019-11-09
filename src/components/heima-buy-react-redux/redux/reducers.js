import { ADD_GOODS, UPDATANUM_GOODS, DELDATANUM_GOODS } from '../redux/actionType'
const initList = JSON.parse(window.localStorage.getItem('myCart')) || []
export default (state = initList, action) => {
    switch (action.type) {
        case ADD_GOODS:
            const addgoodList = [...state] /* 此处由于默认值为引用类型,需要进行深拷贝 */
            const addgoodObj = addgoodList.find(item => {
                return item.id === action.payload.id /* r如果参数存在 返回对应项 */
            })
            if (addgoodObj) {
                addgoodObj.num++
            } else {
                addgoodList.push(action.payload)
            }
            return addgoodList
        case UPDATANUM_GOODS: /* 更改仓库中的值 */
            const updatanumList = [...state]
            const updataObj = updatanumList.find(item => {
                return item.id === action.payload.id  /* 此处有点绕 需注意 这里的payload为一个对象,包含两属性,分别为num ,id */
            })
            updataObj.num = action.payload.num
            return updatanumList
        case DELDATANUM_GOODS:
            const deldataList = [...state]
            const Index = deldataList.findIndex(item => {
                return item.id === action.payload.id
            })
            deldataList.splice(Index, 1)
            return deldataList
        default:
            return state
    }
}