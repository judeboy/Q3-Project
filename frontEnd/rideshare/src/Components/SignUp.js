import React from "react";
import {Input, Icon, Row, Button} from 'react-materialize';
import {signUpPost}  from '../Actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link } from 'react-router-dom'
import { Redirect } from 'react-router'
const SignUp = ({signUpPost,isSignUp}) => {
    return(
        <div className='backgroundImgForLandingPage'>
            {isSignUp ? <Redirect to='/dashboard' /> :
            <form onSubmit={signUpPost}>
              <Input className='userName textFormSize' type="text" name="userName" s={10} placeholder="Username"><Icon>account_circle</Icon></Input>
              <Input className='email textFormSize' type="email" name="email" s={10} placeholder="Email" validate><Icon>mail</Icon></Input>
              <Input className='password textFormSize' type='password' name="password" s={10} placeholder="Password" validate><Icon>lock</Icon></Input>
              <Input className='confirmPassword textFormSize' type='password' name="confirmPassword" s={10} placeholder="Password" validate><Icon>lock</Icon></Input>
              <Input className='phoneNumber' type='Number' name="phoneNumber" s={10} placeholder="Phone Number" validate><Icon>phone</Icon></Input>
                <Button className='signUpButton' waves='light'>Sign Up</Button><br></br>
            </form>
          }
        </div>
    )
}
function mapStateToProps(state) {
  return {
    concerts: state.concertReducer.concerts,
    isSignUp: state.concertReducer.isSignUp
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  signUpPost
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
