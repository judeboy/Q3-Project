import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing'
import Dashboard from './Components/Dashboard'
import Header from  './Components/Header'
import OfferRide from './Components/OfferRide'
import {Button,Input} from 'react-materialize'
import {connect} from 'react-redux'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import {fetchConcert} from './Actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    concert: state.concertReducer.concert,
    // concertsAPI: state.concertReducer.concertAPI
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchConcert
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
