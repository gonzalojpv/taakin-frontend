import React from "react";
import { connect } from 'react-redux';
import CustomerForm from './../../components/Form';
import { newCustomer } from "./../../actions";

class AddCustomer extends React.Component {

  componentDidMount() {
    this.props.newCustomer();
  }

  submit = ( customer ) => {
    console.log( customer );
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

export default connect( mapStateToProps, { newCustomer } )(AddCustomer);
