import { Customer } from './services/customer';

const defaultState = {
  customers: [],
  customer: new Customer() ,
  loading: false,
  errors:{}
}

export default ( state=defaultState, action={} ) => {
  switch (action.type) {
    case 'FETCH_CUSTOMERS_FULFILLED': {
      return {
        ...state,
        customers: action.payload
      }
    }
    case 'NEW_CUSTOMER': {
      return {
        ...state,
        contact: {name:{}}
      }
    }

    case 'SAVE_CUSTOMER_PENDING': {
      return {
        ...state,
        loading: true
      }
    }
    default:
      return state;

  }

}
