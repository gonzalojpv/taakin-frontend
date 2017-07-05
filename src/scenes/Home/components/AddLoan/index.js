import React from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { fetchCustomers } from "./../../scenes/Customers/actions";
import { newAmount, saveAmount } from "./../../scenes/Amounts/actions";
import AlertContainer from 'react-alert'
import { Modal, FormGroup, Col, Button, FormControl, ControlLabel, HelpBlock, Row, ButtonToolbar } from 'react-bootstrap';
import './styles.css';

const validate = (values) => {

  const errors = {};

  return errors;
}

class ModalForm extends React.Component {

  renderField = ({ id, input, label, type, help, meta: { touched, error }, ...props }) => (
    <FormGroup controlId={id} validationState={ (touched && error)? 'error':null}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...input} placeholder={label} type={type} />
      {touched && error && <HelpBlock>{error.message}</HelpBlock>}
    </FormGroup>
  )

  renderSelect = ({id, input, label, type, options, meta: { touched, error }, ...props}) => (

    <FormGroup controlId={id} validationState={ (touched && error)? 'error':null}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...input} componentClass="select" placeholder={label}>
        {options}
      </FormControl>
      {touched && error && <HelpBlock>{error.message}</HelpBlock>}
    </FormGroup>
  )

  render() {

    const { handleSubmit, pristine, submitting, reset, customers } = this.props;

    let options = customers.map( (customer) => {
      return <option value={customer.id} key={customer.id}>{`${customer.first_name} ${customer.last_name} ${customer.name}` }</option>
    } );

    return(
      <div>
        <Modal show={this.props.show} onHide={this.props.close}>
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Nuevo Prestamo</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Row>
                <Col sm={12}>
                <Field id="name" name="customer_id" type="text" component={this.renderSelect} label="Nombre" options={options}/>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <Field id="amount" name="amount" type="number" component={this.renderField} label="Monto"/>
                </Col>
              </Row>

            </Modal.Body>
            <Modal.Footer>
              <Row>
                <Col sm={12}>
                  <ButtonToolbar>
                  <Button bsStyle="danger" disabled={pristine || submitting} onClick={()=>{
                    this.props.close();
                    reset();
                  }}>
                    Cerrar
                  </Button>
                    <Button bsStyle="primary" type="submit" disabled={pristine || submitting}>
                      Guardar
                    </Button>
                </ButtonToolbar>
                </Col>
              </Row>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

// Decorate the form component
ModalForm = reduxForm({
  form: 'amount', // a unique name for this form
  validate
})(ModalForm);




class AddLoan extends React.Component {

  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  constructor( props ) {
    super( props );

    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    this.props.fetchCustomers();
    this.props.newAmount();
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  showAlert = () => {
    this.msg.show('Prestamo cargado correctamente', {
      time: 2000,
      type: 'success'
    })
  }

  submit = ( amount ) => {

    return this.props.saveAmount(amount)
      .then(response => {
        this.setState({ showModal: false })
        this.showAlert();
      } )
      .catch(err => {
        throw new SubmissionError(this.props.errors)
      });
  }

  render() {

    return(
      <div className="small-box bg-aqua">
        <div className="inner">
          <h3>$4000</h3>

          <p>Total Prestamo</p>
        </div>
        <div className="icon">
          <a href="#" className="icon" onClick={ this.open.bind(this) }>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </a>
        </div>
        <a onClick={ this.open.bind(this) } className="small-box-footer" >
          <i className="fa fa-plus" aria-hidden="true"></i> Nuevo Prestamo
        </a>
        <ModalForm
          show={this.state.showModal}
          customers={this.props.customers}
          close={ this.close.bind(this) }
          onSubmit={this.submit}
        />
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    customers : state.Home.customerStore.customers,
    errors: state.Home.customerStore.errors
  }
}

export default connect( mapStateToProps, { fetchCustomers, newAmount, saveAmount } )(AddLoan);
