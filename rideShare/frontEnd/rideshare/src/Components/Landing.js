import React from 'react'
import {Navbar,Icon, Row, Input, Button, Parallax} from 'react-materialize'
const Landing = () => {
  return (
    <div>
      <Navbar brand='Ride Share' right id="navbar">
        <Row className="validation">
        	<Input s={12} m={12} l={4} validate placeholder='email'><Icon>account_circle</Icon></Input>
        	<Input s={12} m={12} l={4} validate type='password'placeholder='password'><Icon>lock</Icon></Input>
          <Button className="signIn" waves='light'>Sign-In</Button>
          <Button className ="signUp" waves='light'>Sign-Up</Button>
        </Row>
      </Navbar>
      <div>
      	<Parallax imageSrc="/Images/Image1.jpeg" className="firstImage"/>
      	<div className="section white">
      		<div className="row container">
      			<h2 className="header">Parallax</h2>
      			<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      		</div>
      	</div>
      	<Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
      </div>
    </div>
  )
}
export default Landing
