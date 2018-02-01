import {combineReducers} from 'redux'
import { CONCERTS_RECEIVED, OFFER_RIDE,POST_SIGN_IN,POST_SIGN_UP,POST_OFFER_RIDE,NEED_RIDE,MY_CONFIRMED_RIDES,TAKE_TO_DASHBOARD} from '../Actions'
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
  confirmedrides: [],
  isConfirmedRides: false,
  offeredRides: [],
  inofferRide: false,
  deleteRide: false,
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
        }),
        inDashboard: action.inDashboard
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
        inDashboard: action.inDashboard,
        inofferRide: action.inofferRide
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
          id: action.id,
          inDashboard: action.inDashboard
        }
      case 'BOOK_SEAT':
        return{
          ...state,
          inDashboard: action.inDashboard
        }
      case 'MY_CONFIRMED_RIDES':
        return{
          ...state,
          confirmedrides: action.confirmedrides,
          isConfirmedRides: action.isConfirmedRides,
        }
      case 'MY_OFFERED_RIDES':
        return{
          ...state,
          offeredRides: action.offeredRides,
          myofferRide: action.myofferRide
        }
      case 'TAKE_TO_DASHBOARD':
      return{
        ...state,
        inDashboard: false
      }
      case 'LOG_OUT':
      return{
        state
      }
      case 'DELETE_OFFER_RIDE':
      return{
        ...state,
        inDashboard: action.inDashboard,
        deleteRide: action.deleteRide
      }
    default:
      return state
  }
}
export default combineReducers({
  concertReducer,
})
