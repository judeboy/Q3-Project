import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {Modal, Button,Input,Icon} from 'react-materialize'
import {bookSeat} from '../Actions'
const NeedRide = ({ride,id,bookSeat}) => {
  return(
    <div>
      <Modal
      	header='Driver Info'
      	fixedFooter
      	trigger={<Button>Drivername</Button>}>
        rtists

          <p className="driverName1" value={ride.driverName}>Name: {ride.driverName}</p>
          <p className="departingFrom1" value={ride.person_address}>Departing From: {ride.person_address}</p>
          <p className="departingTime1" value={ride.departingTime}>Departing Time: {ride.departingTime}</p>
          <p className="phoneNumber1" value={ride.phone}>Phone Number: {ride.phone}</p>
          <p className="Email1" value={ride.email}>Email: {ride.email}</p>
          <p className="seatsAvailable1" value={ride.availableSeats}>Seats Available: {ride.availableSeats}</p>
          <Button onClick={bookSeat}>Book A Seat </Button>
      </Modal>

    </div>
  )
}
function mapStateToProps(state) {
  return {
    id: state.concertReducer.id
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  bookSeat
}, dispatch)
export default NeedRide
