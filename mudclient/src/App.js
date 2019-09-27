import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import BackgroundImage from '../src/components/BackgroundComponents/Background'



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BackgroundImage/>
        <Route exact path="/" component={} />
        <Route path='/login' component={} />
        <PrivateRoute path='/pyWar' component={} />
      </div>
    )
  }
}


export default App;

