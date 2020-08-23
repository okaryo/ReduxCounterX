import * as React from 'react'
import { Dispatch } from "redux"
import { State } from '../reducers/index'
import incrementCount from '../actions/actionCreaters/increment'
import decrementCount from '../actions/actionCreaters/decrement'
import { connect } from 'react-redux'

interface Props {
  count: number
  incrementCount: () => { type: string; payload: number; }
  decrementCount: () => { type: string; payload: number; }
}

const Counter: React.FC<Props> = ({ count, incrementCount, decrementCount }) => {
  console.log(count)
  return(
    <div>
      <code>{count}</code>
      <button onClick={() => incrementCount()}>+</button>
      <button onClick={() => decrementCount()}>-</button>
    </div>
  )
}

const mapStateToProps = (state: State) => {
  return {count: state.changeCounterReducer.count}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  incrementCount: () => dispatch(incrementCount()),
  decrementCount: () => dispatch(decrementCount())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
