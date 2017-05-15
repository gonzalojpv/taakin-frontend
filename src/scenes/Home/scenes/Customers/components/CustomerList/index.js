import React from "react";

const CustomerItem = ({ customer }) => {
  return(
    <tr>
      <td>{customer.id}</td>
      <td>{customer.name + ' ' + customer.first_name + ' ' + customer.last_name}</td>
      <td>{customer.phone}</td>
      <td>{customer.address}</td>
      <td>{customer.cp}</td>
      <td>
        $1000
      </td>
      <td><span className="badge bg-green">90%</span></td>
    </tr>
  );
}

const CustomerList = ({ customers }) => {

  const customersBoby = customers.map( (customer) => {
    return ( <CustomerItem customer={customer} key={customer.id} /> )
  });

  return(
    <div className="box box-primary">
      <div className="box-header">
        <h3 className="box-title">Mis deudores</h3>

        <div className="box-tools">
          <ul className="pagination pagination-sm no-margin pull-right">
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&raquo;</a></li>
          </ul>
        </div>
      </div>
      <div className="box-body no-padding">
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Dirección</th>
          <th>C.P</th>
          <th>Prestamo</th>
          <th>Porcentaje</th>
        </tr>
        </thead>
        <tbody>
          {customersBoby}
        </tbody>




      </table>
      </div>
    </div>
  );
}

export default CustomerList;
