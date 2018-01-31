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
   const response = await fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=22c7usm63w7kpdw2q3e62aed`)
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
  console.log(e.target.id)
  let a = store.getState().concertReducer.concerts
  let concert = a.filter(ele=> {
    if(ele.Id== e.target.id){
      return ele
    }
  })
  console.log(concert)
  //concert info
  let date_time = concert[0].Date
  let venue_name = concert[0].Venue.Name
  let venue_address = concert[0].Venue.Address
  let artists = concert[0].Artists[0].Name
  console.log(date_time,venue_name,venue_address,artists)
  //person info
  let driverName = e.target.Username.value
  let email = e.target.Email.value
  let phone = e.target.Phone.value
  let availableSeats = e.target.Seats.value
  let person_address = e.target.Address.value
  let city = e.target.City.value
  let state = e.target.State.value
  let departingTime = e.target.Departing.value
  let comments = e.target.Comments.value
  let data = {
    date_time: date_time,
    venue_name:venue_name,
    venue_address:venue_address,
    artists: artists,
    driverName: driverName,
    email: email,
    phone: phone,
    availableSeats: availableSeats,
    person_address: person_address,
    city: city,
    state: state,
    departingTime: departingTime,
    comments: comments
  }
  return async (dispatch) => {
    const response = await fetch('/rides', {
      method: 'POST',
      body: JSON.stringify({data}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    console.log(response)
    const offerRide = await response.json()
    dispatch({
      type: POST_SIGN_UP,
      offerRide: offerRide,
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
    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({username: name, email: email, phone_number: phoneNumber, password: password}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    console.log(response)
    const newUser = await response.json()
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
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({email: email,password: password}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const user = await response.json()
    console.log(response)
    console.log(user)
    dispatch({
      type: POST_SIGN_IN,
      response: response.status,
      isSignIn: true,
    })
  }
}
