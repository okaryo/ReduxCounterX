import { INCREMENT } from '../actionTypes'

export default function increment() {
  return {
    type: INCREMENT,
    payload: 1
  }
}
