import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Form from "./components/Form";

export default class SignUp extends Component {

  render() {
    return (
      <div className="register-box-body">
        <p className="login-box-msg">Register a new membership</p>
        <Form/>
        <Link to="/" className="text-center">I already have a membership</Link><br/>
      </div>
    );
  }
}
