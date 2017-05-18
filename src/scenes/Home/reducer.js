import { combineReducers } from 'redux';
import CustomerReducer from './scenes/Customers/reducer';


const HomeReducer = combineReducers({
  customerStore: CustomerReducer
});

export default HomeReducer;
