import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
    user: userReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
