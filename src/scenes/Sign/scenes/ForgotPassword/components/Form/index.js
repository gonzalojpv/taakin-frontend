import React from "react";

const Form = () => {
  return (
    <form action="../../index.html" method="post">

      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email" />
        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>

      <div className="row">
        <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              You receved a email
            </label>
          </div>
        </div>
        <div className="col-xs-4">
          <button type="submit" className="btn btn-primary btn-block btn-flat">Send</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
