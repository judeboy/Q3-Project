import React from 'react'
<<<<<<< HEAD
import {connect} from 'react-redux'
import {fetchConcert} from '../Actions'
import {Modal, Button, Input, Row, Form, Icon} from 'react-materialize'
import { bindActionCreators } from 'redux'

const myRides = () => {
	return (
		<div>
			<Modal header='Modal Header' trigger={<Button waves='light'>REQUESTED<Icon right>insert_chart</Icon></Button>}>
				<p>
					Concert Info
				</p>
			</Modal>
		</div>
)}

function mapStateToProps(state) {
  return {
    concerts: state.concertReducer.concerts,
    concert: state.concertReducer.concert
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchConcert
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(myRides)
=======
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
>>>>>>> faa25c59f7b5923e17a5e0d6c2eb91ce8fd461bc
