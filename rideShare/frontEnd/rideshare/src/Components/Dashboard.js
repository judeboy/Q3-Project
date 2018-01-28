import React from 'react'
import ConcertCollapsible from './ConcertCollapsible'
import {connect} from 'react-redux'
const Dashboard = ({concerts,concert}) => {
  console.log(concerts)
  return(
    <div className="collection">
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
export default connect(mapStateToProps)(Dashboard)
