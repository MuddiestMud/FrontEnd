import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import BackgroundImage from './components/ImageComponents/Background'
import LoginButton from './components/ImageComponents/LoginButton'
import HeaderLogo from './components/HeaderComponents/Header'



class App extends Component {
  render() {
    return (
      <div className="App">
        <BackgroundImage />
        <LoginButton/>
        
        {/* <Route exact path="/" component={} />
        <Route path='/login' component={} />
        <PrivateRoute path='/pyWar' component={} /> */}
      </div>
    )
  }
}

export default App