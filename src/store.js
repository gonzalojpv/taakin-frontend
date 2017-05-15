import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import HomeReducer from './scenes/Home/reducer';

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk));

const appReducer = combineReducers({
	Home: HomeReducer
});

export default createStore( appReducer, middleware );
