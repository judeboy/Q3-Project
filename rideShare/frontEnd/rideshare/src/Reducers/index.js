import {combineReducers} from 'redux'
const initialState = {
  concerts: [ ]
}
const concertReducer = (state=initialState,action) => {
  return initialState
}
export default combineReducers({
  concertReducer,
})
