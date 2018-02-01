import React from 'react'
import {Collapsible,CollapsibleItem,Button} from 'react-materialize'
import {deleteConfirmedRides} from '../Actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
const MyConfirmedRide = ({confirmRide,deleteConfirmedRides}) => {
  return(
    <div>
      <Collapsible accordion id='concertCollapsible'>
        <CollapsibleItem header={confirmRide.artists} icon='filter_drama'>
          <p>Artists: {confirmRide.artists} </p>
          <p>Concert Date Time: {confirmRide.date_time} </p>
          <p>Concert Venue: {confirmRide.venue_name} </p>
          <p>Driver Name: {confirmRide.driverName} </p>
          <p>Departing Date Time: {confirmRide.departingTime} </p>
          <p>Driver Email: {confirmRide.email} </p>
          <p>Driver Phone Number: {confirmRide.phone} </p>
          <Button onClick={deleteConfirmedRides} id={confirmRide.id}>Delete Ride </Button>
        </CollapsibleItem>
      </Collapsible>
      <br />
  </div>
  )
}
const mapDispatchToProps = dispatch => bindActionCreators({
  deleteConfirmedRides
}, dispatch)
export default connect(null, mapDispatchToProps)(MyConfirmedRide)
