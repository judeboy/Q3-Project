import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing'
import ConcertList from './Components/ConcertList'
import ConcertImage from './Components/ConcertImage'
import {fetchConcert} from './Actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
class App extends Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    this.props.fetchConcert()
  }
  render() {
    return (
      <div>
        {/* <Landing /> */}
        <ConcertImage />
        <ConcertList />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchConcert
}, dispatch)

export default connect(null, mapDispatchToProps)(App)
