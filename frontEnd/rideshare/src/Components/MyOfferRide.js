import React from 'react'
import {Collapsible,CollapsibleItem,Button} from 'react-materialize'
import {deleteOfferRide} from '../Actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Link,
} from 'react-router-dom'
import { Redirect } from 'react-router'
const MyOfferRide = ({offerRide,deleteOfferRide,inDashboard}) => {
  return(
    <div>
      {/* {inDashboard ? */}
      <Collapsible accordion id='concertCollapsible'>
        <CollapsibleItem header={offerRide.artists} icon='filter_drama'>
          <p>Venue Information </p>
          <p>Artists: {offerRide.artists} </p>
          <p>Concert Date Time: {offerRide.date_time} </p>
          <p>Concert Venue: {offerRide.venue_name} </p>
          <p>Venue Address: {offerRide.venue_address} </p>
          <br />
          <p>Your Information </p>
          <p>Driver Name: {offerRide.driverName} </p>
          <p>Departing Date Time: {offerRide.departingTime} </p>
          <p>Driver Email: {offerRide.email} </p>
          <p>Driver Phone Number: {offerRide.phone} </p>
          <p>No Of Seats Available: {offerRide.availableSeats} </p>
          <p>Your Comment: {offerRide.comments} </p>
          <br />
            <Button onClick={deleteOfferRide} id={offerRide.id}>Delete Ride</Button>
        </CollapsibleItem>
      </Collapsible>
      {/* <Redirect to ='/dashboard' /> : */}
      <br />
  </div>
  )
}
function mapStateToProps(state) {
  return {inDashboard: state.concertReducer.inDashboard}
}
const mapDispatchToProps = dispatch => bindActionCreators({
  deleteOfferRide
}, dispatch)
export default connect(null, mapDispatchToProps)(MyOfferRide)
