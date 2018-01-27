import React from 'react'
import {connect} from 'react-redux'
import {Carousel,Slider,Slide} from 'react-materialize'
const ConcertImage = ({concerts}) => {
  return(
    <Slider>
      {concerts.map(concert => {
        return(
          <Slide
        		src={concert.imageSrc}
        		title="This is our big Tagline!">
        		Here's our small slogan.
        	</Slide>
        )
      })}
    </Slider>
  )
}
function mapStateToProps(state) {
  return {concerts: state.concertReducer.concerts}
}
export default connect(mapStateToProps)(ConcertImage)
