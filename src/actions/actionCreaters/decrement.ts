import { DECREMENT } from '../actionTypes'

export default function decrement() {
  return {
    type: DECREMENT,
    payload: 1
  }
}
