import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Sign from './scenes/Sign';
import Home from './scenes/Home';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Sign}/>
            <Route path="/signup" component={Sign}/>
            <Route path="/recover" component={Sign}/>
            <Route path="/dashboard" component={Home}/>
          </div>
        </Router>

    );
  }
}

export default App;
