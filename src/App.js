import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import store from './store';
import './App.css';
import Sign from './scenes/Sign';
import Home from './scenes/Home';

class App extends Component {
  render() {
    return (
        <Router>
          <Provider store={store}>
            <div className="App">
                <Route exact path="/" component={Sign}/>
                <Route path="/signup" component={Sign}/>
                <Route path="/recover" component={Sign}/>
                <Route path="/dashboard" component={Home}/>
                <Route path="/customers" component={Home}/>
            </div>
          </Provider>
        </Router>
    );
  }
}

export default App;
