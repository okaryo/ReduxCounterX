import { combineReducers } from 'redux'
import changeCounterReducer from './changeCounterReducer'

export interface State {
  counter: {
    count: number
  }
}

const rootReducers = combineReducers({
  counter: changeCounterReducer
})

export default rootReducers
