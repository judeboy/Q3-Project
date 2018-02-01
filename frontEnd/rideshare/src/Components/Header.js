import React from 'react'
import {Navbar, NavItem, Row, Input} from 'react-materialize'
import {Link } from 'react-router-dom'

// import SideNav from './Navbar'

const Header = () => {
  return(
      <div className = "header">
        <span id="title">hoist</span>
        <p className='aboutUs'>
          <Link to ='/about'>
            <span id="aboutUs">About Us</span>
          </Link>
        </p>
      </div>
  )
}
export default Header
