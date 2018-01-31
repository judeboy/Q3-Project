import React from 'react'
import ConcertCollapsible from './ConcertCollapsible'
import {connect} from 'react-redux'
import {Input, Button, Row} from 'react-materialize'
import {fetchConcert} from '../Actions'
import { bindActionCreators } from 'redux'
const Dashboard = ({concerts,concert,fetchConcert}) => {
  console.log('concerts: ', concerts)
  return(
    <div className='dashboardDiv'>
      <Button>MyOfferRide</Button>
      <Button>MyNeedRide</Button>
      <Row className="inputSearchField">
        <Input s={12} type ='Number' placeholder="ZipCode" className="zipCode"></Input>
        <Input s={12} type ='Number' placeholder="Radius in Miles" className="radius"></Input>
      </Row>
        <Button onClick={fetchConcert} className="searchConcertButton">Search for Shows</Button>
      {concerts.map(concert=> {
        return(
          <ConcertCollapsible key={concert.id} id={concert.id} concert={concert} />
        )
      })}
    </div>
  )
}
function mapStateToProps(state) {
  return {
    concerts: state.concertReducer.concerts,
    concert: state.concertReducer.concert
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchConcert
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
