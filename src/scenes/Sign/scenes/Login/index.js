import React from "react";

export default class Login extends React.Component {

  render() {
    return (
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form>
          <div className="form-group has-feedback">
            <input type="email" className="form-control" placeholder="Email" />
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input type="password" className="form-control" placeholder="Password" />
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div className="row">

            <div className="col-xs-8">
              <div className="checkbox icheck">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
              </div>
            </div>
            <div className="col-xs-4">
              <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>

          </div>
        </form>
        <a href="#">I forgot my password</a><br/>
        <a href="" className="text-center">Register a new membership</a>
      </div>

    );
  }
}
