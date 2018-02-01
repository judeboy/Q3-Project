import {combineReducers} from 'redux'
import { CONCERTS_RECEIVED, OFFER_RIDE,POST_SIGN_IN,POST_SIGN_UP,POST_OFFER_RIDE,NEED_RIDE} from '../Actions'
import store from '../store'
const initialState = {
  concerts: [],
  concert: [],
  offerRide: [],
  needRide: [],
  user: {},
  isSignUp: false,
  isSignIn: false,
  inDashboard: false,
  ride: [],
  id: null,
}
const concertReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'CONCERTS_RECEIVED':
    return {
      ...state,
      concerts: action.concerts,
    }
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
      case 'POST_SIGN_IN':
        return{
          ...state,
          isSignIn: action.isSignIn
        }
    case 'POST_OFFER_RIDE':
    console.log('in reducer')
      return{
        ...state,
        inDashboard: action.inDashboard
      }
    case 'POST_SIGN_UP':
      return{
        ...state,
        user: action.newUser,
        isSignUp: action.isSignUp
      }
      case 'NEED_RIDE':
        return{
          ...state,
          ride: action.rides,
          id: action.id
        }
        break;
    default:
      return state
  }
}
export default combineReducers({
  concertReducer,
})
