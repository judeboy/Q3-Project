import React from "react";
import {Input, Icon, Row, Button, } from 'react-materialize';
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser,postSignIn} from '../Actions'
import { bindActionCreators } from 'redux'
const SignIn = ({fetchUser,postSignIn}) => {
    return(
        <div className='backgroundImgForLandingPage'>
            <img className='carImg' src="/Images/CarImg.jpeg"/>
            <form onSubmit={postSignIn}>
              <Input className='email' type="email" s={10} placeholder="Email" name="email" validate><Icon>mail</Icon></Input>
              <Input className='password' type='password' s={10} placeholder="Password" name="password" validate><Icon>lock</Icon></Input>
              <Button className='signInButton' waves='light'>
                Sign In
              </Button>
            </form>
            {/* <Link to='/dashboard'> */}
            {/* </Link> */}


            <br />
            <Link to= '/signup'>
              <Button className='newUserButton' waves='light'>New User</Button>
            </Link>
            <p className='aboutUs'>
              <Link to ='/about'>
                <span id="aboutUs">About Us</span>
              </Link>
                <span onClick={fetchUser} id="ContactUs">Contact Us</span>
            </p>
        </div>
    )
}
function mapStateToProps(state) {
  return {
    concerts: state.concertReducer.concerts,
    concert: state.concertReducer.concert
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  postSignIn
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
