import React from 'react';
import './styles.css';

const BoxInfo = ( props ) => {

  const { customer } = props;

  return(
    <div className="box box-primary">
      <div className="box-header with-border">
        <h3 className="box-title">Sobre Mi</h3>
      </div>
      <div className="box-body">

        <strong><i className="fa fa-map-marker margin-r-5"></i> Dirección</strong>
        <p className="text-muted">{customer.address}</p>
        <strong><i className="fa fa-map margin-r-5"></i> Código Postal</strong>
        <p className="text-muted">{customer.cp}</p>

        <hr/>

        <strong><i className="fa fa-phone margin-r-5"></i> Teléfono</strong>
        <p className="text-muted">{customer.phone}</p>

        <hr/>

        <strong><i className="fa fa-envelope margin-r-5"></i> Correo</strong>
        <p className="text-muted">{customer.email}</p>

        <hr/>

        <strong><i className="fa fa-file-text-o margin-r-5"></i> Notas</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>

      </div>
    </div>
  );
}

export default BoxInfo;
