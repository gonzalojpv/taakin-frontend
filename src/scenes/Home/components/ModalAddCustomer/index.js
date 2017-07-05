import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlertContainer from 'react-alert';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { newCustomer, saveCustomer } from "./../../scenes/Customers/actions";
import { Modal, FormGroup, Col, Button, FormControl, ControlLabel, HelpBlock, Row, ButtonToolbar } from 'react-bootstrap';
import './styles.css';

const validate = (values) => {

  const errors = {};

  if( !values.name ) {
    errors.name = {
      message: 'Usted necesita proporcionar el Nombre.'
    }
  }
  if( !values.first_name ) {
    errors.first_name = {
      message: 'Usted necesita proporcionar Apellido Paterno.'
    }
  }
  if( !values.last_name ) {
    errors.last_name = {
      message: 'Usted necesita proporcionar Apellido Materno.'
    }
  }
  if( !values.address ) {
    errors.address = {
      message: 'Usted necesita proporcionar la Dirección.'
    }
  }
  if(!values.phone) {
    errors.phone = {
      message: 'Usted necesita proporcionar un Teléfono.'
    }
  } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone = {
      message: 'El número de teléfono debe estar en formato internacional.'
    }
  }
  if( values.email) {
    if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) )
    errors.email = {
      message: 'Dirección de correo electrónico no válida.'
    }
  }

  return errors;
}


class ModalForm extends Component {

  renderField = ({ id, input, label, type, help, meta: { touched, error }, ...props }) => (
    <FormGroup controlId={id} validationState={ (touched && error)? 'error':null}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...input} placeholder={label} type={type} />
      {touched && error && <HelpBlock>{error.message}</HelpBlock>}
    </FormGroup>
  )

  render() {

    const { handleSubmit, pristine, submitting, reset } = this.props;

    return(
      <div>
        <Modal show={this.props.show} onHide={this.props.close}>
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Nuevo Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col sm={4}>
                  <Field id="name" name="name" type="text" component={this.renderField} label="Nombre" help=" "/>
                </Col>
                <Col sm={4}>
                  <Field id="first_name" name="first_name" type="text" component={this.renderField} label="A. Paterno"/>
                </Col>
                <Col sm={4}>
                  <Field id="last_name" name="last_name" type="text" component={this.renderField} label="A. Materno"/>
                </Col>
              </Row>

              <Row>
                <Col sm={9}>
                  <Field id="address" name="address" type="text" component={this.renderField} placeholder="Dirección" label="Dirección"/>
                </Col>
                <Col sm={3}>
                  <Field id="cp" name="cp" type="text" component={this.renderField} placeholder="C.P" label="Código Postal"/>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <Field id="phone" name="phone" type="text" component={this.renderField} placeholder="Teléfono" label="Teléfono"/>
                </Col>
                <Col sm={6}>
                  <Field id="email" name="email" type="email" component={this.renderField} placeholder="Correo" label="Correo"/>
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

ModalForm = reduxForm({
  form: 'modal_customer', // a unique name for this form
  validate
})(ModalForm);



class ModalAddCustomer extends Component {

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
    this.props.newCustomer();
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  submit = ( customer ) => {
    return this.props.saveCustomer(customer)
      .then(response => {
        this.setState({ showModal: false })
        this.showAlert();
      })
      .catch(err => {
        throw new SubmissionError(this.props.errors)
      });
  }

  showAlert = () => {
    this.msg.show('Cliente agregado correctamente', {
      time: 2000,
      type: 'success'
    })
  }

  render() {
    return(
      <div className="small-box bg-yellow">
        <div className="inner">
          <h3>200</h3>

          <p>Clientes</p>
        </div>
        <div className="icon">
          <a href="#" className="icon" onClick={ this.open.bind(this) }>
            <i className="fa fa-user-plus" aria-hidden="true"></i>
          </a>
        </div>
        <a onClick={ this.open.bind(this) } className="small-box-footer" >
          <i className="fa fa-plus" aria-hidden="true"></i> Nuevo Cliente
        </a>
        <ModalForm
          show={this.state.showModal}
          close={ this.close.bind(this) }
          onSubmit={this.submit}
        />
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
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

export default connect( mapStateToProps, { newCustomer, saveCustomer } )(ModalAddCustomer);
