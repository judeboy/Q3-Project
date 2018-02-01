import React from 'react'
import ConcertCollapsible from './ConcertCollapsible'
import {connect} from 'react-redux'
import {Input, Button, Row} from 'react-materialize'
import {fetchConcert} from '../Actions'
import { bindActionCreators } from 'redux'
<<<<<<< HEAD
=======
import initialState from  '../index.js'


>>>>>>> faa25c59f7b5923e17a5e0d6c2eb91ce8fd461bc


const Dashboard = ({concerts,concert,fetchConcert}) => {
if(!concerts){concerts=[]}
  console.log('concerts: ', concerts)
  return(
    <div className='dashboardDiv'>
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
  fetchConcert
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
