import { combineReducers } from 'redux'
import changeCounterReducer from './changeCounterReducer'

export interface State {
  changeCounterReducer: {
    count: number
  }
}

const rootReducers = combineReducers({changeCounterReducer})

export default rootReducers
