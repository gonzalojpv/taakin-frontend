import React from "react";

const CustomerList = ( props ) => {
  return(
    <div className="box">
      <div className="box-header">
        <h3 className="box-title">Simple Full Width Table</h3>

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
          <th>Prestamo</th>
          <th>Porcentaje</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>4.</td>
          <td>Fix and squish bugs</td>
          <td>
            $1000
          </td>
          <td><span className="badge bg-green">90%</span></td>
        </tr>
        </tbody>




      </table>
      </div>
    </div>
  );
}

export default CustomerList;
