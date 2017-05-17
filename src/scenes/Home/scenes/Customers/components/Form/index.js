import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class CustomerForm extends React.Component {

  renderField = ({ id, input, label, type, help, meta: { touched, error }, ...props }) => (
    <div>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </div>
  )

  render() {

    const { handleSubmit, pristine, submitting, loading, customer, title } = this.props;

    return(
      <section className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">{title}</h3>
        </div>
        <Form horizontal onSubmit={handleSubmit}>
          <div className="box-body">

            <FormGroup>
              <Col sm={4}>
                <Field id="name" name="name" type="text" component={this.renderField} placeholder="Nombre" label="Nombre" help=" "/>
              </Col>
              <Col sm={4}>
                <Field id="first_name" name="first_name" type="text" component={this.renderField} placeholder="A. Paterno" label="A. Paterno" help=" "/>
              </Col>
              <Col sm={4}>
                <Field id="last_name" name="last_name" type="text" component={this.renderField} placeholder="A. Materno" label="A. Materno" help=" "/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={9}>
                <Field id="address" name="address" type="text" component={this.renderField} placeholder="Dirección" label="Dirección" help=" "/>
              </Col>
              <Col sm={3}>
                <Field id="cp" name="cp" type="text" component={this.renderField} placeholder="C.P" label="Código Postal" help=" "/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={6}>
                <Field id="phone" name="phone" type="text" component={this.renderField} placeholder="Télefono" label="Teléfono" help=" "/>
              </Col>
              <Col sm={6}>
                <Field id="email" name="email" type="email" component={this.renderField} placeholder="Correo" label="Correo" help=" "/>
              </Col>
            </FormGroup>

          </div>
          <div className="box-footer">
            <FormGroup>
              <Col sm={12}>
                <Button type="submit" disabled={pristine || submitting}>
                  Guardar
                </Button>
              </Col>
            </FormGroup>
          </div>
        </Form>
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

export default reduxForm({form:'customer' })(CustomerForm);
