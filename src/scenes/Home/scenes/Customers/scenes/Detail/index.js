import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Tabs, Tab } from 'react-bootstrap';
import { fetchCustomer } from "./../../actions";
import BoxInfo from './../../components/BoxInfo';
import Card from './../../components/Card';
import TimeLine from './../../components/TimeLine';

class Detail extends React.Component {

  componentDidMount() {

    const { id } = this.props.match.params;

    this.props.fetchCustomer( id );
  }

  render() {

    return(
      <Row>
        <Col sm={3}>
          <div className="box box-primary">
            <Card/>
          </div>
          <div className="box box-primary">
            <BoxInfo/>
          </div>
        </Col>
        <Col sm={9}>
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="TimeLine"><TimeLine/></Tab>
            <Tab eventKey={2} title="Setting">Tab 2 content</Tab>
          </Tabs>
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
