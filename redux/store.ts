import { createStore, applyMiddleware, Store, Middleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers/rootReducers'

const middlewares: Middleware[] = [thunk]
const store: Store = createStore(rootReducers, applyMiddleware(...middlewares))

export default store