import React from 'react'
import ConcertCollapsible from './ConcertCollapsible'
import {connect} from 'react-redux'
import {Input, Button, Row} from 'react-materialize'
import {fetchConcert,myConfirmedRides,myOfferedRide} from '../Actions'
import { bindActionCreators } from 'redux'
import initialState from  '../index.js'
import {
  Link,
} from 'react-router-dom'
const Dashboard = ({concerts,concert,fetchConcert,myConfirmedRides,myOfferedRide}) => {
if(!concerts){concerts=[]}
  console.log('concerts: ', concerts)
  return(
    <div className='dashboardDiv'>
      <Link to='/confirmedrides'>
        <Button onClick={myConfirmedRides}>My Confirmed Rides</Button>
      </Link>
      <Link to='/offeredRides'>
        <Button onClick={myOfferedRide}>My Offered Rides</Button>
      </Link>
      <form onSubmit = {fetchConcert}>
      <Row className="inputSearchField">
        <Input s={12} type ='Number' placeholder="ZipCode" className="zipCode" required></Input>
        <Input s={12} type ='Number' placeholder="Radius in Miles" className="radius"></Input>
      </Row>
        <Button type='submit'  className="searchConcertButton">Search for Shows</Button>
      </form>
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
  fetchConcert,
  myConfirmedRides,
  myOfferedRide
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
