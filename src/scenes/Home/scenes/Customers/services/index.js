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

  getCustomer( _id ) {
    return axios.get( `${this.apiUrl}${_id}`, {
      headers: this.headers
    } )
    .then(response => response.data)
    .catch( (error) => {
      console.log( "error" ,error );
    } );
  }

  create( customer ) {

    let params = this.serialize( customer );

    return axios.post( this.apiUrl, params, { 'headers': this.headers} )
      .then( response => response.data );
  }

  /**
  * Serializes the form element so it can be passed to the back end through the url.
  * The objects properties are the keys and the objects values are the values.
  * ex: { "a":1, "b":2, "c":3 } would look like ?a=1&b=2&c=3
  * @param  {SystemSetup} obj - The system setup to be url encoded
  * @returns URLSearchParams - The url encoded system setup
  */
  serialize(obj): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var element = obj[key];

            params.set(key, element);
        }
    }
    return params;
  }

}
