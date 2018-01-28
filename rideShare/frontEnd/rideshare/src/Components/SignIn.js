import React from "react";
import {Input, Icon, Row, Button} from 'react-materialize';


const SignIn = () => {
    return(
        <div className='backgroundImgForLandingPage'>
            <img className='carImg' src="/Images/CarImg.jpeg"/>
            <Row className='loginRow'>
            <Input className='email' type="email" s={10} placeholder="Email" validate><Icon>mail</Icon></Input>
            <Input className='password' type='password' s={10} placeholder="Password" validate><Icon>lock</Icon></Input>
            </Row>
            <Button className='signInButton' waves='light'>Sign In</Button><br></br>
            <Button className='newUserButton' waves='light'>New User</Button>
            <p className='aboutUs'>
                <span id="aboutUs">About Us</span>
            </p>
        </div>
    )
}

export default SignIn;
