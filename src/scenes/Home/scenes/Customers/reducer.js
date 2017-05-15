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
    default:
      return state;

  }

}
