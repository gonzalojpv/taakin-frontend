import React, { Component } from "react";
import InfoBox from "./components/InfoBox";
import AddLoan from "./../../components/AddLoan";
import './styles.css';

export default class Dashboard extends Component {

  render() {
    return(
      <div>
        <section className="content-header">
          <h1>
            Dashboard
            <small>Version 2.0</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Dashboard</li>
          </ol>
        </section>
        <div className="content">
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              <AddLoan/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox
                icon='fa-cog'
                title='Hi'
                content='80%'
                bg='bg-aqua'
              />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox
                icon='fa-cog'
                title='Hi'
                content='769'
                bg='bg-red'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
