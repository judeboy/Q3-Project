import {combineReducers} from 'redux'
import { CONCERT_RECEIVED } from '../Actions'
const initialState = {
  concerts: [ ]
}
const concertReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'CONCERT_RECEIVED':
    return {
      ...state,
      concerts: action.concerts,
    }
    default:
      return state
  }
}
export default combineReducers({
  concertReducer,
})
