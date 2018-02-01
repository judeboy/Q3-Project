import React from "react";
import {Input, Icon, Row, Button, } from 'react-materialize';
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {postSignIn} from '../Actions'
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router'
const SignIn = ({postSignIn,isSignIn}) => {
    return(
        <div className='backgroundImgForLandingPage'>
            {isSignIn ? <Redirect to ='/dashboard'/> :
            <form onSubmit={postSignIn}>
              <Input className='email' type="email" s={10} placeholder="Email" name="email" validate><Icon>mail</Icon></Input>
              <Input className='password' type='password' s={10} placeholder="Password" name="password" validate><Icon>lock</Icon></Input>
              <Button className='signInButton' waves='light'>
                Sign In
              </Button>
            </form>
            }
            <br />
            <Link to= '/signup'>
              <Button className='newUserButton' waves='light'>New User</Button>
            </Link>
        </div>
    )
}
function mapStateToProps(state) {
  return {
    concerts: state.concertReducer.concerts,
    concert: state.concertReducer.concert,
    isSignIn: state.concertReducer.isSignIn
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  postSignIn
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
