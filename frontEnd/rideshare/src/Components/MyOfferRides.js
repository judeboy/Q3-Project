import React from 'react'
import MyOfferRide from './MyOfferRide'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

const MyOfferRides = ({offeredRides,deleteRide}) => {
  let token = localStorage.getItem('token').toString()
  function parseJwt(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
  };
  let id = parseJwt(token).id
  let arr = offeredRides.filter(ele => {
    if(ele.user_id === id) {
      return ele
    }
  })
  return(
    <div>
      {deleteRide ? <Redirect to='/dashboard' /> :
      <div>
        {arr.map(ele => {
          return(
            <MyOfferRide id={ele.id} key={ele.id} offerRide={ele} />
          )
        })}
      </div>
      }
  </div>
  )
}
function mapStateToProps(state) {
  return {
    offeredRides: state.concertReducer.offeredRides,
    deleteRide: state.concertReducer.deleteRide
  }
}

export default connect(mapStateToProps)(MyOfferRides)
