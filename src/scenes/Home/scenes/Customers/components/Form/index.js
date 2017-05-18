import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, Col, Button, FormControl, ControlLabel, HelpBlock, Row, ButtonToolbar } from 'react-bootstrap';

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


class CustomerForm extends React.Component {

  componentWillReceiveProps = (nextProps) => {

    const { customer } = nextProps;

    if( customer._id !== this.props.customer._id )
      this.props.initialize(customer)

  }

  renderField = ({ id, input, label, type, help, meta: { touched, error }, ...props }) => (
    <FormGroup controlId={id} validationState={ (touched && error)? 'error':null}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...input} placeholder={label} type={type} />
      {touched && error && <HelpBlock>{error.message}</HelpBlock>}
    </FormGroup>
  )

  render() {

    const { handleSubmit, pristine, submitting, reset, title } = this.props;

    return(
      <section className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">{title}</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="box-body">
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

          </div>
          <div className="box-footer">
            <Row>
              <Col sm={12}>
                <ButtonToolbar>
                  <Button bsStyle="primary" type="submit" disabled={pristine || submitting}>
                    Guardar
                  </Button>
                  <Button bsStyle="danger" disabled={pristine || submitting} onClick={reset}>
                    Limpiar
                  </Button>
              </ButtonToolbar>
              </Col>
            </Row>
          </div>

      </form>
      </section>
    );
  }
}

CustomerForm.propTypes = {
  customer: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func,
  loading: PropTypes.bool.isRequired
}

// Decorate the form component
CustomerForm = reduxForm({
  form: 'customer', // a unique name for this form
  validate
})(CustomerForm);
export default CustomerForm;
