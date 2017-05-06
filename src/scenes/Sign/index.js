import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from "./components/Header";
import Login from "./scenes/Login";
import SignUp from "./scenes/Register";
import ForgotPassword from "./scenes/ForgotPassword";
import './styles.css';

export default class Sign extends React.Component {

  render() {
    return (
      <Router>
        <div className="login-box">
          <Header/>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/recover" component={ForgotPassword}/>
        </div>
      </Router>

    );
  }
}
