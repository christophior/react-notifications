import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notifications from './notifications.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>react-notifications</h2>
        </div>
        <p className="App-intro">
          <Notifications />
        </p>
      </div>
    );
  }
}

export default App;
