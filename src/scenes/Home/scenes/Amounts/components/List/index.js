import React from "react";

const AmountItem = ({ amount }) => {
  return(
    <tr>
      <td>{amount.id}</td>
      <td>{amount.amount}</td>
      <td>Eliminar</td>
    </tr>
  );
}

const List = ({ amounts }) => {

  const amountsBody = amounts.map( (amount) => {
    return ( <AmountItem amount={amount} key={amount.id} /> );
  } );

  return(
    <div className="box box-primary">
      <div className="box-header">
        <h3 className="box-title">Mis Montos</h3>
      </div>
      <div className="box-body no-padding">
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Monto</th>
          <th></th>
        </tr>
        </thead>
        <tbody>{amountsBody}</tbody>
      </table>
      </div>
    </div>
  );
}

export default List;
