import React from 'react'
import {Navbar, NavItem, Row, Input} from 'react-materialize'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {takeToDashboard} from '../Actions'
// import SideNav from './Navbar'

const Header = ({takeToDashboard}) => {
  return(
      <div className = "header">
        <Link to ='/dashboard'>
          <span id="title" onClick={takeToDashboard}>hoist</span>
        </Link>
        <p className='aboutUs'>
          <Link to ='/about'>
            <span id="aboutUs">About Us</span>
          </Link>
        </p>
        <p>Log Out</p>
      </div>
  )
}
const mapDispatchToProps = dispatch => bindActionCreators({
  takeToDashboard
}, dispatch)
export default connect(null, mapDispatchToProps)(Header)
