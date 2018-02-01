import React from 'react'
import {Collapsible,CollapsibleItem, Button, Row, Modal} from 'react-materialize'
import {offerRide, needRide, offeraRide} from '../Actions'
import {connect} from 'react-redux'
import {
  Link,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'

const ConcertCollapsible = ({concert,offerRide,props,needRide,offeraRide}) => {
    console.log(concert.Artists[0].Name)
    let a = concert.TicketUrl.toString()
    console.log(a)

  return(
      <div>
        <Collapsible accordion id='concertCollapsible' onClick={offerRide}>
        	<CollapsibleItem header={concert.Artists[0].Name} icon='place' id={concert.id}>
        		<p>Venue: {concert.Venue.Name}</p>
                <p>Date/Time: {concert.Date}</p>
                <p>Street Address: {concert.Venue.Address}</p>
                <p>City: {concert.Venue.City}</p>
                <p>State: {concert.Venue.State}</p>
                <p>Buy Ticket: {concert.TicketUrl} </p>
                <Link to ={{
                  pathname: '/rides',
                  search: `?id=${concert.Id}`
                }}>
                  <Button className='offerRideButton'  onClick={offeraRide}>
                    Offer a Ride
                  </Button>
                </Link>
                <br></br>
                <br></br>

                <Link to ={{
                  pathname: '/needRideForm',
                  search: `?id=${concert.Id}`
                }} >
                </Link>
                <Link to='myrides'>
                  <Button className='needRideButton' onClick={needRide} id={concert.Id}>Request a Ride</Button>
                </Link>
        	</CollapsibleItem>
        </Collapsible>
      </div>
  )
}
// function mapStateToProps(state) {
//   return {messages: state.messageReducer.messages}
// }
const mapDispatchToProps = dispatch => bindActionCreators({
  offerRide: offerRide,
  needRide: needRide,
  offeraRide
}, dispatch)
export default connect(null, mapDispatchToProps)(ConcertCollapsible)
