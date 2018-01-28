import {combineReducers} from 'redux'
import { CONCERT_RECEIVED, OFFER_RIDE ,CONCERTS_RECEIVED} from '../Actions'
import store from '../store'
const initialState = {
  concerts: [ ],
  concert: [],
  concertsAPI : []
}
const concertReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'CONCERT_RECEIVED':
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
          if(concert.id === Number(action.id)) {
            return concert
          }
        })
      }
    default:
      return state
  }
}
export default combineReducers({
  concertReducer,
})
