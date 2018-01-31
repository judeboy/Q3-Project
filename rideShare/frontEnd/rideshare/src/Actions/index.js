// import React from 'react'
// import {browserHistory,Redirect} from 'react-router'
import store from '../store'
export const CONCERTS_RECEIVED = 'CONCERTS_RECEIVED'
export function fetchConcert() {
 let zipCode = document.getElementsByClassName('zipCode')[0].value
 let radius = document.getElementsByClassName('radius')[0].value
 if(radius === "") {
   radius = '20'
 }
 return async (dispatch) => {
   const response = await fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=vty4dsmgqahqfszehhus9a5t`)
   // console.log(response)
   const json = await response.json()
   dispatch({
     type: CONCERTS_RECEIVED,
     concerts: json.Events
   })
 }
}
export const OFFER_RIDE = 'OFFER_RIDE'
export function offerRide(e) {
  console.log(e.target)
  e.preventDefault()
  console.log(e.target.class)
  return async (dispatch) => {
    dispatch({
      type: OFFER_RIDE,
      id: e.target.id
    })
  }
}

export const POST_OFFER_RIDE = 'POST_OFFER_RIDE'
export function postOfferRide(e) {
  e.preventDefault()
  let a = store.getState().concertReducer.concerts
  let concert = a.filter(ele=> {
    if(ele.Id == e.target.id) {
      return ele
    }
  })
  //concert info
  let concert_id = concert[0].Id
  let date_time = concert[0].Date
  let venue_name = concert[0].Venue.Name
  let venue_address = concert[0].Venue.Address
  let artists = concert[0].Artists[0].Name
  //person info
  let driverName = e.target.Username.value
  let email = e.target.Email.value
  let phone = e.target.Phone.value
  let availableSeats = e.target.Seats.value
  let person_address = e.target.Address.value
  let departingTime = e.target.Departing.value
  let comments = e.target.Comments.value
  let jwt = localStorage.getItem('token')
  console.log(jwt)
  return async (dispatch) => {
    const response = await fetch('http://localhost:5000/rides', {
      method: 'POST',
      body: JSON.stringify({concert_id: concert_id,
      date_time: date_time,
      venue_name:venue_name,
      venue_address:venue_address,
      artists: artists,
      driverName: driverName,
      email: email,
      phone: phone,
      availableSeats: availableSeats,
      person_address: person_address,
      departingTime: departingTime,
      comments: comments,
      jwt: jwt,
    }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    console.log(response)
    const offerRide = await response.json()
    console.log(offerRide)
    dispatch({
      type: POST_OFFER_RIDE,
      inDashboard: true,
    })
  }
}

export const POST_SIGN_UP = 'POST_SIGN_UP'
export function signUpPost(e) {
  e.preventDefault()
  let name = e.target.userName.value
  let email = e.target.email.value
  let password = e.target.password.value
  let confirmPassword = e.target.confirmPassword.value
  let phoneNumber = e.target.phoneNumber.value
  if(password !== confirmPassword){
    return alert('password does not match')
  }
  return async (dispatch) => {
    console.log(name)
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      body: JSON.stringify({username: name, email: email, phone_number: phoneNumber, password: password}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    console.log(response)
    const newUser = await response.json()
    console.log(newUser)
    if(response.status === 200){
      let cookie = `jwt=${newUser.token}`
      document.cookie = cookie;
    }
    dispatch({
      type: POST_SIGN_UP,
      newUser: newUser,
      isSignUp: true
    })
  }
}
export const POST_SIGN_IN = 'POST_SIGN_IN'
export function postSignIn(e) {
  e.preventDefault()
  console.log('in post signin')
  let email = e.target.email.value
  let password = e.target.password.value
  console.log(email, password)
  return async (dispatch) => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({email: email,password: password}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    console.log(response)
    const user = await response.json()
    if(response.status === 200) {
      let cookie = `jwt=${user.token}`
      document.cookie = cookie;
      localStorage.setItem('token', user.token)
    }
    dispatch({
      type: POST_SIGN_IN,
      response: response.status,
      isSignIn: true,
    })
  }
}
