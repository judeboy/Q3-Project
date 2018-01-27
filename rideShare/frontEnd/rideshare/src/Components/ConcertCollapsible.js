import React from 'react'
import {Collapsible,CollapsibleItem} from 'react-materialize'
const ConcertCollapsible = ({concert}) => {
  return(
    <div>
      <Collapsible>
      	<CollapsibleItem header={concert.name} icon='filter_drama'>
      		Lorem ipsum dolor sit amet.
      	</CollapsibleItem>
      </Collapsible>
    </div>
  )
}

export default ConcertCollapsible
