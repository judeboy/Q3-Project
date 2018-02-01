import React from 'react'
import {Modal, Button, Input, Row, Form} from 'react-materialize'
import {connect} from 'react-redux'
import {postOfferRide} from '../Actions'
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router'
const OfferRide = ({...props,concerts,postOfferRide, inDashboard}) => {
  let a = props.location.search.slice(4)
  console.log(a)
  let concert = concerts.filter(ele => {
    if(ele.Id === Number(a)) {
      return ele
    }
  })
  function callback() {
    
  }
  return(
    <div className='rideOfferdiv'>
        <Modal id='concertModal' header={concert[0].Artists[0].Name} fixedFooter trigger={<Button id="modalButton">{concert[0].Artists[0].Name}</Button>}>
            <p className='rideOfferPara'>Venue: {concert[0].Venue.Name}</p>
            <p className='rideOfferPara'>Date/Time: {concert[0].Date}</p>
            <p className='rideOfferPara'>Street Address: {concert[0].Venue.Address}</p>
            <p className='rideOfferPara'>City: {concert[0].Venue.City}</p>
            <p className='rideOfferPara'>State: {concert[0].Venue.State}</p>
        </Modal>
        {inDashboard ? <Redirect to ='/dashboard' /> :
          <form onSubmit={postOfferRide} id={concert[0].Id}>
            <label htmlFor="Driver">Driver Name</label>
            <input id="driver" name="Username" type="text"/>

            <label className='offerRideLabels' htmlFor="email">Email</label>
            <input id="email" name="Email" type="email"/>

            <label className='offerRideLabels' htmlFor="Phone">Phone</label>
            <input id="Phone" name="Phone" type="number" />

            <label className='offerRideLabels' htmlFor="seatsAvailable">Seats Available</label>
            <input id="Seats" name="Seats" type="number" />

            <label htmlFor="Address">Address</label>
            <input id="Address" name="Address" type="text" />

            <label className='offerRideLabels' htmlFor="Departing Time">Departing Time</label>
            <input id="Departing" name="Departing" type="text" />

            <label htmlFor="Comments">Comments</label>
            <input id="Comments" name="Comments" type="text" />

            <Button className='offerRideLabels' className="offerRideButton">OfferRide</Button>
          </form>
         }
    </div>
  )
}
function mapStateToProps(state) {
  return {
    concerts: state.concertReducer.concerts,
    inDashboard: state.concertReducer.inDashboard
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  postOfferRide
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OfferRide)
// export default OfferRide
