import React from 'react'
import {Navbar, NavItem, Row, Input} from 'react-materialize'

// import SideNav from './Navbar'

const Header = () => {
  return(
      <div className = "header">
        <button
          className="button icon-left"
          onClick={this.goBack}>
          Back
        </button>
        <span id="title">hoist</span>
      </div>
  )
}
export default Header
