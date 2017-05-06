import React from "react";
import { Link } from 'react-router-dom';
import Form from "./components/Form";

export default class ForgotPassword extends React.Component {

  render() {
    return (
      <div className="register-box-body">
        <p className="login-box-msg">Recover your password.</p>
        <Form/>
        <Link to="/" className="text-center">I already have a membership</Link><br/>
      </div>
    );
  }
}
