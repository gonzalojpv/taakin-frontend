import {AmountService} from './services'

let request = new AmountService();

export function fetchAmounts() {
  return dispatch => {
    return dispatch({
      type:'FETCH_AMOUNTS',
      payload: request.getAll()
    }).then(({ value, action }) => {});

  }
}

export function fetchAmount( _id ) {
  return dispatch => {
    return dispatch({
      type:'FETCH_AMOUNT',
      payload: request.getAmount(_id)
    }).then(({ value, action }) => {});
  }
}

export function newAmount() {
  return dispatch => {
    return dispatch({
      type: 'NEW_AMOUNT'
    })
  }
}

export function saveAmount( customer ) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_AMOUNT',
      payload: request.create( customer )
    });
  }
}

export function updateAmount( customer ) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_AMOUNT',
      payload: request.update( customer )
    })
  }
}
