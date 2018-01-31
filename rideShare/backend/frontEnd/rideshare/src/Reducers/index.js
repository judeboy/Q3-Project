import {combineReducers} from 'redux'
import { CONCERTS_RECEIVED, OFFER_RIDE,GET_USERS} from '../Actions'
import store from '../store'
const initialState = {
  concerts: [],
  concert: [],
  offerRide: [],
  needRide: [],
  user: {},
  isSignUp: false,
  isSignIn: false,
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
      return{
        state
      }
    case 'POST_SIGN_UP':
      return{
        ...state,
        user: action.newUser,
        isSignUp: action.isSignUp
      }
    case 'GET_USERS':
    console.log(action.users)
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
