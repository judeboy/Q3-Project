import React from 'react'
import {Modal, Button, Input, Row} from 'react-materialize'
import {connect} from 'react-redux'

const OfferRide = ({concert}) => {
  console.log(concert[0])
  return(
    <div className='rideOfferdiv'>
        <Modal id='concertModal' header={concert[0].Artists[0].Name} fixedFooter trigger={<Button id="modalButton">{concert[0].Artists[0].Name}</Button>}>
            <p className='rideOfferPara'>Venue: {concert[0].Venue.Name}</p>
            <p className='rideOfferPara'>Date/Time: {concert[0].Date}</p>
            <p className='rideOfferPara'>Street Address: {concert[0].Venue.Address}</p>
            <p className='rideOfferPara'>City: {concert[0].Venue.City}</p>
            <p className='rideOfferPara'>State: {concert[0].Venue.State}</p>
        </Modal>
        <Row class='offerRideRow'>
          <Input className='rideOfferPara' s={10} defaultValue="Username" disabled />
          <Input className='rideOfferPara' s={10} defaultValue="999-999-9999" disabled />
          <Input className='rideOfferPara' type='number' placeholder="Seats Available" s={10}/>
          <Input className='rideOfferPara' s={10} type='text' placeholder='City' />
          <Input className='rideOfferPara' s={10} type='text' placeholder='State' />
          <Input className='rideOfferPara' s={10} type='text' placeholder='Comments' />
          <Button waves='light' className='buttonOfferRide'>Offer Ride!</Button>
        </Row>
    </div>
  )
}
function mapStateToProps(state) {
  return {concert: state.concertReducer.concert}
}
export default connect(mapStateToProps)(OfferRide)
// export default OfferRide
