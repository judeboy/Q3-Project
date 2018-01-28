import React from 'react'
import ConcertCollapsible from './ConcertCollapsible'
import {connect} from 'react-redux'
import {Input, Button} from 'react-materialize'
import {fetchConcert} from '../Actions'
import { bindActionCreators } from 'redux'
const Dashboard = ({concerts,concert,fetchConcert}) => {
  console.log(concerts)
  return(
    <div className="collection">
        <Input type ='Number' placeholder="zip-code e.g 80301" className="zipCode"></Input>
        <Button waves='light' onClick={fetchConcert}>button</Button>
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
