import React from 'react'
import ConcertCollapsible from './ConcertCollapsible'
import {connect} from 'react-redux'
const ConcertList = ({concerts}) => {
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
  return {concerts: state.concertReducer.concerts}
}
export default connect(mapStateToProps)(ConcertList)
