import React from 'react'
import ConcertCollapsible from './ConcertCollapsible'
import {connect} from 'react-redux'
import {Input, Button, Row} from 'react-materialize'
import {fetchConcert} from '../Actions'
import { bindActionCreators } from 'redux'
const Dashboard = ({concerts,concert,fetchConcert}) => {
  console.log(concerts)
  return(
    <div className='searchDiv'>
      <Row class="inputSearchField">
        <Input s={6} type ='Number' placeholder="zip-code eg 80301" className="zipCode"></Input>
        <Input s={6} type ='Number' placeholder="radius in miles eg 20" className="radius"></Input>
      </Row>
        <Button waves='light' onClick={fetchConcert} className="searchConcert">Search</Button>
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


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
