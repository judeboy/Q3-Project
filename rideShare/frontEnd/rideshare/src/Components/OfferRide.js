import React from 'react'
import {Modal, Button, Input} from 'react-materialize'
import {connect} from 'react-redux'

const OfferRide = ({concert}) => {
  console.log(concert[0])
  return(
    <div>
        <Modal header={concert[0].name} fixedFooter trigger={<Button>{concert[0].name}</Button>}>
            <p>Venue: {concert[0].Venue.Name}</p>
            <p>Date/Time: {concert[0].Date}</p>
            <p>Street Address: {concert[0].Venue.Address}</p>
            <p>City: {concert[0].Venue.City}</p>
            <p>State: {concert[0].Venue.State}</p>
        </Modal>
        <Input s={10} defaultValue="Username" disabled />
        <Input s={10} defaultValue="999-999-9999" disabled />
        <Input type='number' placeholder="Seats Available" s={10} label="seatsAvailable" />
        <Input s={10} type='text' placeholder='City' />
        <Input s={10} type='text' placeholder='State' />
        <Input s={10} type='textArea' placeholder='Comments' />
        <Button waves='light'>Offer Ride!</Button>
    </div>
  )
}
function mapStateToProps(state) {
  return {concert: state.concertReducer.concert}
}
export default connect(mapStateToProps)(OfferRide)
// export default OfferRide
