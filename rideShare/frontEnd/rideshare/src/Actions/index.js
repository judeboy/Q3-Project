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
