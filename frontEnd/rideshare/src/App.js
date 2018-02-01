import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing'
import Dashboard from './Components/Dashboard'
import SignIn from './Components/SignIn'
import Header from  './Components/Header'
import OfferRide from './Components/OfferRide'
// import needRide from './Components/needRide'
// import Rides from './Components/Rides'
import {Button,Input} from 'react-materialize'
import {connect} from 'react-redux'
import SignUp from './Components/SignUp'
import {fetchConcert} from './Actions'
import RidesPage from './Components/Rides'
import {
  Route,
} from 'react-router'
import { bindActionCreators } from 'redux'
const App = (props) => {
  return (
    <div>
      <Header />
      <Route exact path='/' component={SignIn} />
      <Route path='/signup' component ={SignUp} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/about' component ={Landing} />
      <Route path='/rides' component={OfferRide} />
      <Route path='/myrides' component={RidesPage} />
    </div>
  )
};

export default (App)
// connect(mapStateToProps, mapDispatchToProps)
