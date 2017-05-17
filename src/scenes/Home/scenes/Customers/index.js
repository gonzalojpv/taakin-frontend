import React, { Component } from "react";
import { Route } from 'react-router-dom';
import List from './scenes/List';
import AddCustomer from './scenes/AddCustomer';

class Customers extends Component {

  render() {
    return(
      <div>
        <section className="content-header">
          <h1>
            Mis Clientes
            <small>Ordenado por ultimas actualizaciones</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Dashboard</a></li>
            <li><a href="#">Clientes</a></li>
            <li className="active">Lista</li>
          </ol>
        </section>
        <section className="content">
          <Route path={`${this.props.match.url}/new`} component={AddCustomer}/>
          <Route exact path={this.props.match.url} component={List}/>
        </section>
      </div>
    );
  }
}

export default Customers;
