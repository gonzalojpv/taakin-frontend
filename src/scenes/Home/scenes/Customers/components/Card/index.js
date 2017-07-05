import React from 'react';
import './styles.css';
import userPhoto from "./bahlum.png";

const Card = ( props ) => {

  const { customer } = props;

  let fullname = `${customer.name} ${customer.first_name} ${customer.last_name}`;


  return(
    <div className="box box-primary">
      <div className="box-body box-profile">
        <img className="profile-user-img img-responsive img-circle" src={userPhoto} alt="User profile"/>

        <h3 className="profile-username text-center">{ fullname }</h3>

        <p className="text-muted text-center">Don juanito</p>

        <ul className="list-group list-group-unbordered">
          <li className="list-group-item">
            <b>Prestamo 1</b> <a className="pull-right">$1,322</a>
            <span className="label label-success">90%</span>
          </li>
          <li className="list-group-item">
            <b>Prestamo 2</b> <a className="pull-right">$543</a>
            <span className="label label-warning">50%</span>
          </li>
          <li className="list-group-item">
            <b>Prestamo 3</b> <a className="pull-right">$13,287</a>
            <span className="label label-danger">20%</span>
          </li>
        </ul>

        <div className="info-box">
            <span className="info-box-icon bg-aqua"><i className="fa fa fa-usd"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Total de deuda</span>
              <span className="info-box-number">1,410</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Card;
