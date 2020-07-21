import { combineReducers } from 'redux'
import dishReducer from './dishReducers'

export default combineReducers({
  dish: dishReducer
})