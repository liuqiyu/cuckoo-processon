import React, { Component } from 'react';
import Router from './../router/index'
import Topbar from './../components/topbar/topbar';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Topbar></Topbar>
        <div className="App-content">
            <Router></Router>
        </div>
      </div>
    );
  }
}

export default App;
