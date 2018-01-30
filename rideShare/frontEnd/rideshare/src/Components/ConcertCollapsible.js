import React from 'react'
import {Collapsible,CollapsibleItem, Button, Row, Modal} from 'react-materialize'
import {offerRide} from '../Actions'
import {connect} from 'react-redux'
import {
  Link,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'

const ConcertCollapsible = ({concert,offerRide,props}) => {
    console.log(concert.Artists[0].Name)
    let a = concert.TicketUrl.toString()
    console.log(a)

  return(
      <div>
        <Collapsible accordion id='concertCollapsible' onClick={offerRide}>
        	<CollapsibleItem header={concert.Artists[0].Name} icon='filter_drama' id={concert.id}>
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
                  <Button className='offerRideButton' >
                    Offer a Ride
                  </Button>
                </Link>
                <br></br>
                <br></br>
                <Button className='needRideButton'>Request a Ride</Button>
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
}, dispatch)
export default connect(null, mapDispatchToProps)(ConcertCollapsible)
