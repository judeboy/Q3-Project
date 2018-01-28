import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing'
import Dashboard from './Components/Dashboard'
import ConcertImage from './Components/ConcertImage'
import Header from  './Components/Header'
import SideNav from './Components/Sidenav'
import Navbar from './Components/Navbar'
import OfferRide from './Components/OfferRide'
import {Button,Input} from 'react-materialize'
import {fetchconcert} from './Actions'
import {connect} from 'react-redux'
import {
  Route,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
class App extends Component {
  constructor(props) {
    super(props)
  }
  // async componentDidMount() {
  //   this.props.fetchconcert()
  // }
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Header />
        <Input type="text" className="zipCode"></Input>
        <Button onClick={this.props.fetchconcert}>Search</Button>
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
  fetchconcert
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
