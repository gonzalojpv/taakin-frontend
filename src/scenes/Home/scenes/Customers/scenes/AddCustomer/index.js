import React from "react";
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import CustomerForm from './../../components/Form';
import { newCustomer, fetchCustomer, saveCustomer } from "./../../actions";

class AddCustomer extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    const {_id} = this.props.match.params;

    if( _id )
      this.props.fetchCustomer( _id );
    else
      this.props.newCustomer();

    console.log(this.props.customer);
  }

  submit = ( customer ) => {
    console.log('Submit');

    if ( customer.id ) {

    }
    else {
      console.log( customer );
      return this.props.saveCustomer(customer)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
         throw new SubmissionError(this.props.errors)
       });
    }
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-6" >
          {
            this.state.redirect ?
            <Redirect to="/customers" /> :
            <CustomerForm
              title='Nuevo Cliente'
              customer={this.props.customer}
              loading={this.props.loading}
              onSubmit={this.submit}
            />
          }

          </div>
      </div>
    );
  }
}

// Make customer  array available in  props
function mapStateToProps(state) {

  return {
    customer : state.Home.customerStore.customer,
    loading : state.Home.customerStore.loading,
    errors: state.Home.customerStore.errors
  }
}

export default connect( mapStateToProps, { newCustomer, fetchCustomer, saveCustomer } )(AddCustomer);
