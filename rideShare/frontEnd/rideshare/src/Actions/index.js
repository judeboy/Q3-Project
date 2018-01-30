export const CONCERTS_RECEIVED = 'CONCERTS_RECEIVED'
export function fetchConcert() {
 let zipCode = document.getElementsByClassName('zipCode')[0].value
 let radius = document.getElementsByClassName('radius')[0].value
 if(radius === "") {
   radius = '20'
 }
 console.log(zipCode)
 return async (dispatch) => {
   const response = await fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=22c7usm63w7kpdw2q3e62aed`)
   // console.log(response)
   const json = await response.json()
   console.log(json.Events)
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
  let driverName = e.target.Username.value
  let email = e.target.Email.value
  let phone = e.target.Phone.value
  let availableSeats = e.target.Seats.value
  let address = e.target.Address.value
  let city = e.target.City.value
  let state = e.target.State.value
  let departingTime = e.target.Departing.value
  let comments = e.target.Comments.value
  let data = {
    driverName: driverName,
    email: email,
    phone: phone,
    availableSeats: availableSeats,
    address: address,
    city: city,
    state: state,
    departingTime: departingTime,
    comments: comments
  }
  console.log(data)
  return async (dispatch) => {
    dispatch({
      type: OFFER_RIDE,
      name: data
    })
  }
}
