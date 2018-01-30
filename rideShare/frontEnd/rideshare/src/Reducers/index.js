import {combineReducers} from 'redux'
import { CONCERTS_RECEIVED, OFFER_RIDE} from '../Actions'
import store from '../store'
const initialState = {
  concerts: [],
  concert: [],
  offerRide: [],
  needRide: [],
}
const concertReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'CONCERTS_RECEIVED':
    return {
      ...state,
      concerts: action.concerts,
    }
    case CONCERTS_RECEIVED:
      return {
        ...state,
        concertsAPI: action.messages
      }
      break;
    case 'OFFER_RIDE':
      let newConcert = store.getState().concertReducer.concerts
      return{
        ...state,
        concert: newConcert.filter(concert => {
          if(concert.Id === Number(action.id)) {
            return concert
          }
        })
      }
    case 'POST_OFFER_RIDE':
    return{
      state
    }
    default:
      return state
  }
}
export default combineReducers({
  concertReducer,
})
