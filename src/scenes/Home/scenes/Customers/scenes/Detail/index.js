import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { fetchCustomer } from "./../../actions";

class Detail extends React.Component {

  componentDidMount() {

    const { id } = this.props.match.params;

    this.props.fetchCustomer( id );
  }

  render() {

    return(
      <Row>
        <Col sm={12}>
          Detail
        </Col>
      </Row>
    );
  }
}

// Make customer  array available in  props
function mapStateToProps(state) {

  return {
    customer : state.Home.customerStore.customer,
    errors: state.Home.customerStore.errors
  }
}

export default connect( mapStateToProps, { fetchCustomer } )(Detail);
