import React from "react";
import axios from "axios";

export class CustomerService extends React.Component {

  constructor( props ) {

    super(props);

    this.apiUrl = 'http://taakin.proof.code/customers/'
    this.headers = {
      'auth':'jinto d0763edaa9d9bd2a9516280e9044d885',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };

  }

  getAll() {
    return axios.get( this.apiUrl, {
      headers: this.headers
    } )
    .then(response => response.data)
    .catch( (error) => {
      console.log( "error" ,error );
    } );
  }

}
