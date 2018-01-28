import {combineReducers} from 'redux'
<<<<<<< HEAD
import { CONCERT_RECEIVED, OFFER_RIDE ,CONCERTS_RECEIVED} from '../Actions'
import store from '../store'
const initialState = {
  concerts: [ ],
  concert: [],
  concertsAPI : []
=======
import { CONCERTS_RECEIVED, OFFER_RIDE} from '../Actions'
import store from '../store'
const initialState = {
  concerts: [],
  concert: []
>>>>>>> da6b710dadbc0ccd750f003fbb05e1885e161a8e
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
    default:
      return state
  }
}
export default combineReducers({
  concertReducer,
})
