import React from 'react'
import {Navbar,Icon, Row, Input, Button, Parallax,SideNav,SideNavItem} from 'react-materialize'
const Landing = () => {
  return (
    <div class="body">
      <Row style={{display:'none'}}>
        <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
        <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
      </Row>
      	<Parallax imageSrc="/Images/Image1.jpeg" className="firstImage"/>
      	<div className="section white">
      		<div className="row container">
      			<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      		</div>
      	</div>
      	<Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
        <div className="section white">
      		<div className="row container">
      			<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      		</div>
      	</div>
      </div>
  )
}
export default Landing
