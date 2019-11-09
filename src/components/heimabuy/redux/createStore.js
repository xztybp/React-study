import { createStore, applyMiddleware, compose } from 'redux' /* 导入全局状态管理 */
import thunk from 'redux-thunk'  /* thunk是一个封装表达式以延迟计算的函数。 使用applyMiddleware应用中间件*/
import reducers from '../redux/reducers' /* 导入store参数 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

/* 使用redux-thunk 处理异步的action */
export default Store