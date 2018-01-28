import React from 'react'
import {Modal, Button} from 'react-materialize'
import {connect} from 'react-redux'

const OfferRide = ({concert1}) => {
  console.log(concert1[0].name)
  return(
    <Modal header={concert1[0].name} fixedFooter trigger={<Button>{concert1[0].name}</Button>}>
      {concert1[0].body}
    </Modal>
  )
}
function mapStateToProps(state) {
  return {concert1: state.concertReducer.concert}
}
export default connect(mapStateToProps)(OfferRide)
// export default OfferRide
