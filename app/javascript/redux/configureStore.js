import { combineReducers, applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingsReducer from '../redux/reducers/greetingsReducer';

// const reducer = combineReducers({
//   greeting: greetingsReducer,  
// });

const store = createStore(greetingsReducer, applyMiddleware(logger, reduxThunk));

export default store;