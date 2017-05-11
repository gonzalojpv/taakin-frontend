import React, { Component } from "react";
import CustomerList from "./components/CustomerList";

export default class Customers extends Component {

  render() {
    return(
      <section className="content">
        <div className="row">
          <div className="col-sm-12">
            <CustomerList/>
          </div>
        </div>
      </section>

    );
  }
}
