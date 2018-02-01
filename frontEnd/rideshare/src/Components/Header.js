import React from 'react'
import {Navbar, NavItem, Row, Input} from 'react-materialize'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {takeToDashboard, logout} from '../Actions'
// import SideNav from './Navbar'

const Header = ({takeToDashboard,logout}) => {
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
        <Link to='/'>
          <p onClick={logout}>Log Out</p>
        </Link>
      </div>
  )
}
const mapDispatchToProps = dispatch => bindActionCreators({
  takeToDashboard,
  logout
}, dispatch)
export default connect(null, mapDispatchToProps)(Header)
