import React from "react";
import {Input, Icon, Row, Button, } from 'react-materialize';
import {Link } from 'react-router-dom'
const SignIn = (props) => {
  console.log(props);

    return(
        <div className='backgroundImgForLandingPage'>
            <img className='carImg' src="/Images/CarImg.jpeg"/>
            <Row className='loginRow'>
              <Input className='email' type="email" s={10} placeholder="Email" validate><Icon>mail</Icon></Input>
              <Input className='password' type='password' s={10} placeholder="Password" validate><Icon>lock</Icon></Input>
            </Row>

            <Link to='/dashboard'>
              <Button className='signInButton' waves='light'>
                Sign In
              </Button>
            </Link>

            <br />
            <Link to= '/signup'>
              <Button className='newUserButton' waves='light'>New User</Button>
            </Link>
            <p className='aboutUs'>
              <Link to ='/about'>
                <span id="aboutUs">About Us</span>
              </Link>
                <span id="ContactUs">Contact Us</span>
            </p>
        </div>
    )
}

export default SignIn;
