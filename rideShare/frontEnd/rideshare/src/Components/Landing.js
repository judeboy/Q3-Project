import React from 'react'
import {Navbar,Icon, Row, Input, Button, Parallax,SideNav,SideNavItem} from 'react-materialize'
const Landing = () => {
  return (
    <div class="body">
      	<Parallax imageSrc="/Images/road.jpg" />
      	<div className="parallaxTextBox">
      		<div className="row container">
      			<p className="parallaxText">
                    Welcome to hoist!<br></br>
                    The hitchhiker's guide to a ride. <br></br>
                    Search for a concert in any location.<br></br>
                    Be a hero & OFFER a ride.<br></br>
                    Need a miracle, REQUEST a ride<br></br>
                    Never miss a show.
                </p>
      		</div>
      	</div>
      	<Parallax imageSrc="/Images/car.jpg"/>
        <div className="parallaxTextBox">
      		<div className="row container">
      			<p className="parallaxText">
                    "The tires are the things on your car<br></br>
                    That make contact with the road<br></br>
                    The car is the thing on the road<br></br>
                    That takes you back to your abode"<br></br>
                </p>
      		</div>
      	</div>
      </div>
  )
}
export default Landing
