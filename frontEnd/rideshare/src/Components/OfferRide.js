import React from 'react'
import {Input, Modal, Button, Row, Form, Icon} from 'react-materialize'
import {connect} from 'react-redux'
import {postOfferRide} from '../Actions'
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router'
const OfferRide = ({...props,concerts,postOfferRide, inofferRide}) => {
  let a = props.location.search.slice(4)
  console.log(a)
  let concert = concerts.filter(ele => {
    if(ele.Id === Number(a)) {
      return ele
    }
  })
  return(
    <div className='rideOfferdiv'>
      {inofferRide ? <Redirect to ='/dashboard' />  :
      <div>
        
        <div className="test">
          <form onSubmit={postOfferRide} id={concert[0].Id}>
            <input id="driver" name="Username" type="text" Placeholder="Drive Name"/>
            <input id="email" name="Email" type="email" Placeholder="Email"/>
            <input id="Phone" name="Phone" type="number" Placeholder="Phone"/>
            <input id="Seats" name="Seats" type="number" Placeholder="Seat Available"/>
            <input id="Address" name="Address" type="text" Placeholder="Address"/>
            <input id="Departing" name="Departing" type="text" Placeholder="Departing Date & Time"/>
            <input id="Comments" name="Comments" type="text" Placeholder="Comments"/>
            <Button className='offerRideLabels' className="offerRideButton">Offer Ride</Button>
          </form>
          </div>
          <Modal id='concertModal' header={concert[0].Artists[0].Name} fixedFooter trigger={<Button id="modalButton">{concert[0].Artists[0].Name}</Button>}>
            <p className='rideOfferPara'>Venue: {concert[0].Venue.Name}</p>
            <p className='rideOfferPara'>Date/Time: {concert[0].Date}</p>
            <p className='rideOfferPara'>Street Address: {concert[0].Venue.Address}</p>
            <p className='rideOfferPara'>City: {concert[0].Venue.City}</p>
            <p className='rideOfferPara'>State: {concert[0].Venue.State}</p>
          </Modal>
        </div>
         }
    </div>
  )
}
function mapStateToProps(state) {
  return {
    concerts: state.concertReducer.concerts,
    inofferRide: state.concertReducer.inofferRide
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  postOfferRide
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OfferRide)
// export default OfferRide
