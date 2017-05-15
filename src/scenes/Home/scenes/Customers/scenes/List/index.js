import React from "react";
import { connect } from 'react-redux';
import CustomerList from "./../../components/CustomerList";
import { fetchCustomers } from "./../../actions";

class List extends React.Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <CustomerList customers={this.props.customers} />
        </div>
      </div>
    );
  }

}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
    customers : state.Home.customerStore.customers,
    errors: state.Home.customerStore.errors
  }
}

export default connect( mapStateToProps, { fetchCustomers } )(List);
