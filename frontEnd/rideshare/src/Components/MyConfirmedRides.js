import React from 'react'
import MyConfirmedRide from './MyConfirmedRide'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

const MyConfirmedRides = ({confirmedrides,isConfirmedRides,deleteConfirmedRides}) => {
  let token = localStorage.getItem('token')
  let a = token.toString()
  function parseJwt(a) {
      var base64Url = a.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
  };
  let id = parseJwt(a).id
  let arr = confirmedrides.filter(ele => {
    if(ele.user_id === id) {
      return ele
    }
  })
  return(
    <div>
      {deleteConfirmedRides ? <Redirect to='/dashboard' /> :
      <div>
        {arr.map(ele => {
          return(
            <MyConfirmedRide id={ele.id} key={ele.id} confirmRide={ele} />
          )
        })}
      </div>
      }
  </div>
  )
}
function mapStateToProps(state) {
  return {
    confirmedrides: state.concertReducer.confirmedrides,
    isConfirmedRides: state.concertReducer.isConfirmedRides,
    deleteConfirmedRides: state.concertReducer.deleteConfirmedRides
  }
}
export default connect(mapStateToProps)(MyConfirmedRides)
