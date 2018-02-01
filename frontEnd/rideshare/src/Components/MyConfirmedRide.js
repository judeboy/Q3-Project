import React from 'react'
import {Collapsible,CollapsibleItem,Button} from 'react-materialize'
const MyConfirmedRide = ({confirmRide}) => {
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
          <Button>Delete Ride </Button>
        </CollapsibleItem>
      </Collapsible>
      <br />
  </div>
  )
}
export default MyConfirmedRide
