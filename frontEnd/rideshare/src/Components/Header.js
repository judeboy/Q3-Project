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
        <Link to='/'>
          <p className="logoutButton" onClick={logout}>Log Out</p>
        </Link>
      </div>
  )
}
const mapDispatchToProps = dispatch => bindActionCreators({
  takeToDashboard,
  logout
}, dispatch)
export default connect(null, mapDispatchToProps)(Header)
