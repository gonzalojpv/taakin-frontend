import React, { Component } from "react";

class AddPayment extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      showModal: false
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return(
      <div className="small-box bg-green">
        <div className="inner">
          <h3>$4000 <sup>de $1,500</sup></h3>

          <p>Pagos del día</p>
        </div>
        <div className="icon">
          <a href="#" className="icon" onClick={ this.open.bind(this) }>
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
          </a>
        </div>
        <a onClick={ this.open.bind(this) } className="small-box-footer" >
          <i className="fa fa-plus" aria-hidden="true"></i> Nuevo Pago
        </a>
      </div>
    );
  }
}

export default AddPayment;
