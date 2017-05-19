import React from "react";
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import CustomerForm from './../../components/Form';
import { newCustomer, fetchCustomer, saveCustomer, updateCustomer } from "./../../actions";

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
  }

  submit = ( customer ) => {

    if ( customer.id ) {
      return this.props.updateCustomer( customer )
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
          throw new SubmissionError(this.props.errors)
        });
    }
    else {
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
          <CustomerForm
            title='Nuevo Cliente'
            customer={this.props.customer}
            loading={this.props.loading}
            onSubmit={this.submit}
          />
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

export default connect( mapStateToProps, { newCustomer, fetchCustomer, saveCustomer, updateCustomer } )(AddCustomer);
