import { combineReducers } from 'redux';
import CustomerReducer from './scenes/Customers/reducer';
import AmountReducer from './scenes/Amounts/reducer';


const HomeReducer = combineReducers({
  customerStore: CustomerReducer,
  amountStore: AmountReducer,
});

export default HomeReducer;
