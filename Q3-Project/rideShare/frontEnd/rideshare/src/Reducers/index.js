import {combineReducers} from 'redux'
import { CONCERT_RECEIVED, OFFER_RIDE} from '../Actions'
import store from '../store'
const initialState = {
  concerts: [ ],
  concert: []
}
const concertReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'CONCERT_RECEIVED':
    return {
      ...state,
      concerts: action.concerts,
    }
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
