import {
  INCREMENT,
  DECREMENT
} from '../actions/actionTypes'

interface Action {
  type: string
  payload: number
}

const initialState = {
  count: 5
}

const changeCounterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      }
    default:
      return state
  }
}

export default changeCounterReducer
