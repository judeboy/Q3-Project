import React from 'react'
import {Collapsible,CollapsibleItem} from 'react-materialize'
const MyOfferRide = ({offerRide}) => {
  return(
    <div>
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
        </CollapsibleItem>
      </Collapsible>
      <br />
  </div>
  )
}
export default MyOfferRide
