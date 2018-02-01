import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {Modal, Button,Input,Icon} from 'react-materialize'
import {bookSeat} from '../Actions'
import {Redirect} from 'react-router'
const NeedRide = ({ride,id,bookSeat,inDashboard}) => {
  console.log(ride,id)
  return(
    <div>
      {inDashboard ? <Redirect to='/dashboard' /> :
      <Modal
      	header='Driver Info'
      	fixedFooter
      	trigger={<Button>Drivername</Button>}>
        rtists
          <p>Name:<span className="driverName1"> {ride.driverName}</span></p>
          <p>Departing From:<span className="departingFrom1"> {ride.person_address}</span></p>
          <p>Departing Time:<span className="departingTime1"> {ride.departingTime}</span></p>
          <p>Phone Number:<span className="phoneNumber1"> {ride.phone}</span></p>
          <p>Email:<span className="email1"> {ride.email}</span></p>
          <p>Seats Available:<span className="seatsAvailable1"> {ride.availableSeats}</span></p>
          <Button onClick={bookSeat} id={ride.concert_id} className={ride.id}>Book A Seat </Button>
      </Modal>
    }
    </div>
  )
}
function mapStateToProps(state) {
  return {
    id: state.concertReducer.id,
    inDashboard: state.concertReducer.inDashboard
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  bookSeat
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NeedRide)
