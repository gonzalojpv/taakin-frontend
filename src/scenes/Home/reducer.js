import { combineReducers } from 'redux';
import CustomerReducer from './scenes/Customers/reducer';
import { reducer as formReducer } from 'redux-form';

const HomeReducer = combineReducers({
  customerStore: CustomerReducer,
  form: formReducer
});

export default HomeReducer;
