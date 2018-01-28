import React from "react";
import {Input, Icon, Row, Button} from 'react-materialize';

const SignUp = () => {
    return(
        <div className='backgroundImgForLandingPage'>
            <img className='carImg' src="/Images/CarImg.jpeg"/>

            <Row className='loginRow'>
                <Input className='userName' type="text" s={10} placeholder="Username" validate><Icon>account_circle</Icon></Input>
                <Input className='email' type="email" s={10} placeholder="Email" validate><Icon>mail</Icon></Input>
                <Input className='password' type='password' s={10} placeholder="Password" validate><Icon>lock</Icon></Input>
                <Input className='confirmPassword' type='password' s={10} placeholder="Password" validate><Icon>lock</Icon></Input>
            </Row>
            <Button className='signUpButton' waves='light'>Sign Up</Button><br></br>
            <p className='aboutUs'>
                <span id="aboutUs">About Us</span>
            </p>
        </div>
    )
}

export default SignUp;
