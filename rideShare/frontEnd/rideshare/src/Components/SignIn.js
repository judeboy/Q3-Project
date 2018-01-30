import React from "react";
import {Input, Icon, Row, Button, } from 'react-materialize';
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser,postSignIn} from '../Actions'
import { bindActionCreators } from 'redux'
const SignIn = ({fetchUser,postSignIn}) => {
    return(
        <div id='signInMainDiv'>
            <form className='signInForm' onSubmit={postSignIn}>
              <Input className='email' type="email" s={10} placeholder="Email" name="email" validate><Icon>mail</Icon></Input>
              <Input className='password' type='password' s={10} placeholder="Password" name="password" validate><Icon>lock</Icon></Input>
              <Link to= '/dashboard'>
              <Button className='signInButton' waves=''>
                Sign In
              </Button>
              </Link>
            </form>
        <br />
        <Link to= '/signup'>
          <Button className='newUserButton' waves=''>New User</Button>
        </Link>
         <br/>
         <br/>
          <Link className="aboutUsLink" to ='/about'>About Us
          </Link>
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
