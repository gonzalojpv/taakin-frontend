import { Amount } from './services/amount';

const defaultState = {
  amounts: [],
  amount: new Amount(),
  loading: false,
  errors:{}
}

export default ( state=defaultState, action={} ) => {

  switch (action.type) {
    case 'FETCH_AMOUNTS_FULFILLED': {
      return {
        ...state,
        customers: action.payload
      }
    }
    case 'FETCH_AMOUNTS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_AMOUNTS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }
    default:
      return state;

  }

}
