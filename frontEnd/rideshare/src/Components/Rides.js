import React from 'react'
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
