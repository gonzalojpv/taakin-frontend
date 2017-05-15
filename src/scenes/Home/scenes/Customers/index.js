import React, { Component } from "react";
import List from './scenes/List';

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
          <List/>
        </section>
      </div>
    );
  }
}

export default Customers;
