import { combineReducers } from 'redux'
import countryReducer from './countryReducer'
import pokeReducer from './pokeReducers'
import dishReducer from './dishReducers'

export default combineReducers({
  contry: countryReducer,
  poke: pokeReducer,
  dish: dishReducer
})