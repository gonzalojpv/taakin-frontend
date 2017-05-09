import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Sign from './scenes/Sign';
import Home from './scenes/Home';
import Dashboard from './scenes/Dashboard';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Sign}/>
            <Route path="/signup" component={Sign}/>
            <Route path="/recover" component={Sign}/>
            <Route path="/home" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
          </div>
        </Router>

    );
  }
}

export default App;
