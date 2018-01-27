import React from 'react'
import {Collapsible,CollapsibleItem, Button} from 'react-materialize'
const ConcertCollapsible = ({concert}) => {
  return(
    <div>
      <Collapsible accordion popout className="collapsibleConcert">
      	<CollapsibleItem header={concert.name} icon='place' Button='Buy'>
      		<p>{concert.body}</p>
          <p>DATE : {concert.date}</p>
          <p>TIME : {concert.time}</p>
          <Button waves='light'>Confirm Ride</Button>
      	</CollapsibleItem>
      </Collapsible>
    </div>
  )
}

export default ConcertCollapsible
