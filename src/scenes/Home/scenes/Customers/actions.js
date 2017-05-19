import {CustomerService} from './services'

let request = new CustomerService();

export function fetchCustomers() {
  return dispatch => {
    return dispatch({
      type:'FETCH_CUSTOMERS',
      payload: request.getAll()
    }).then(({ value, action }) => {});

  }
}

export function fetchCustomer( _id ) {
  return dispatch => {
    return dispatch({
      type:'FETCH_CUSTOMER',
      payload: request.getCustomer(_id)
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

export function saveCustomer( customer ) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CUSTOMER',
      payload: request.create( customer )
    });
  }
}

export function updateCustomer( customer ) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_CUSTOMER',
      payload: request.update( customer )
    })
  }
}
