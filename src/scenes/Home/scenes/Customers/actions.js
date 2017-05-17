import { CustomerService } from './services'

export function fetchCustomers( service = new CustomerService() ) {
  return dispatch => {
    return dispatch({
      type:'FETCH_CUSTOMERS',
      payload: service.getAll()
    }).then(({ value, action }) => {});

  }
}

export function newCustomer() {
  return dispatch => {
    return dispatch({
      type: 'NEW_CUSTOMER'
    })
  }
}
