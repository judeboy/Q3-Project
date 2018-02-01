import React from 'react'
import {Modal, Button, Input, Row, Form} from 'react-materialize'
import NeedRide from './needRide'
import {connect} from 'react-redux'
const Rides = ({ride,id}) => {
	let a = ride.filter(ele => {
    if(ele.concert_id == id) {
      return ele
    }
  })
  console.log(a)
	return (
		<div>
			hello
			{a.map(ele => {
				return(
					<NeedRide id={ele.id} key={ele.id} ride={ele} />
				)
			})}
		</div>

)}
function mapStateToProps(state) {
  return {
    ride: state.concertReducer.ride,
		id: state.concertReducer.id
  }
}
// const mapDispatchToProps = dispatch => bindActionCreators({
//   offerRide: offerRide,
//   needRide: needRide
// }, dispatch)
export default connect(mapStateToProps)(Rides)
