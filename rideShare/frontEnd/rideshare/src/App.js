import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing'
import Dashboard from './Components/Dashboard'
import ConcertImage from './Components/ConcertImage'
import Header from  './Components/Header'
import SideNav from './Components/Sidenav'
import Navbar from './Components/Navbar'
import OfferRide from './Components/OfferRide'
import {fetchConcert} from './Actions'
import {connect} from 'react-redux'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'


import {
  Route,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
class App extends Component {
  constructor(props) {
    super(props)
  }
  // async componentDidMount() {
  //   this.props.fetchConcert()
  // }
  render() {
    return (
      <div>
        <Header />
        {/* <Route path='/' render={() => (
          <SignIn/>
        )} /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <Dashboard /> */}
        {/* <Navbar /> */}
        {/* <SideNav /> */}
        {/* <Landing /> */}
        {/* <ConcertImage /> */}
        <Route exact path='/' render={() => (
          <Dashboard />
        )} />
        <Route path='/offerRide' render={() => (
          <OfferRide concert={this.props.concert}/>
        )} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    concerts: state.concertReducer.concerts,
    concert: state.concertReducer.concert
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchConcert
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
