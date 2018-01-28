import React from 'react'
import {Collapsible,CollapsibleItem, Button, Row, Modal} from 'react-materialize'
import {offerRide} from '../Actions'
import {connect} from 'react-redux'
import {
  Link,
} from 'react-router-dom'
// import {browserHistory} from 'react-router'
// import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
const ConcertCollapsible = ({concert,offerRide}) => {
    console.log(concert.Artists[0].Name)
    let a = concert.TicketUrl.toString()
    console.log(a)
  return(
      <Link to='/offerRide'>
      <div>
        <Collapsible accordion>
        	<CollapsibleItem header={concert.Artists[0].Name} icon='filter_drama'>
        		<p>Venue: {concert.Venue.Name}</p>
                <p>Date/Time: {concert.Date}</p>
                <p>Street Address: {concert.Venue.Address}</p>
                <p>City: {concert.Venue.City}</p>
                <p>State: {concert.Venue.State}</p>
                <p>Buy Ticket: {concert.TicketUrl} </p>
                <Link to ='/offerRide'>
                    <Button waves='light' onClick={offerRide} id={concert.Id} >OfferRide</Button>
                </Link>
                <Button waves='light'>NeedRide</Button>
        	</CollapsibleItem>
        </Collapsible>
      </div>
  </Link>

  )
}
// function mapStateToProps(state) {
//   return {messages: state.messageReducer.messages}
// }
const mapDispatchToProps = dispatch => bindActionCreators({
  offerRide: offerRide,
}, dispatch)
export default connect(null, mapDispatchToProps)(ConcertCollapsible)
