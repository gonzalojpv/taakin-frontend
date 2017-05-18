import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import HomeReducer from './scenes/Home/reducer';
import { reducer as formReducer } from 'redux-form';

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk));

const appReducer = combineReducers({
	Home: HomeReducer,
	form: formReducer
});

export default createStore( appReducer, middleware );
