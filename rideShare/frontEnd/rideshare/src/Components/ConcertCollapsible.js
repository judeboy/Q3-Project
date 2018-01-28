import React from 'react'
import {Collapsible,CollapsibleItem, Button, Row, Modal} from 'react-materialize'
import {offerRide} from '../Actions'
import {connect} from 'react-redux'
import {
  Link,
  withRouter
} from 'react-router-dom'
// import {browserHistory} from 'react-router'
// import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
const ConcertCollapsible = ({concert,offerRide}) => {
  return(
    <div className="concertsList">
      <Collapsible accordion popout className="collapsibleConcert">
      	<CollapsibleItem header={concert.name} icon='place' Button='Buy' id='collapsibleHeader'>
          <div style={{backgroundImage: `url(${concert.imageSrc})`, color:'white'}}>
            <p>{concert.body}</p>
            <p>DATE : {concert.date}</p>
            <p>TIME : {concert.time}</p>
            <Row>
              <Link to="/offerRide">
                <span l={6} waves='light' className="offerRide" id={concert.id} onClick ={offerRide}>Offer Ride</span>
              </Link>
              <Button l={6} waves='light' className="needRide">Need Ride</Button>
            </Row>
          </div>
      	</CollapsibleItem>
      </Collapsible>
      {/* <Modal header={concert.name} fixedFooter trigger={<Button>{concert.name}</Button>}>
      	{concert.body}
        <Row>
          <Button l={6} waves='light'className="offerRide">Offer Ride</Button>
          <Button l={6} waves='light'className="needRide">Need Ride</Button>
        </Row>
      </Modal>
      <br></br>
      <br></br> */}
    </div>

  )
}
// function mapStateToProps(state) {
//   return {messages: state.messageReducer.messages}
// }
const mapDispatchToProps = dispatch => bindActionCreators({
  offerRide: offerRide,
}, dispatch)
export default connect(null, mapDispatchToProps)(ConcertCollapsible)
