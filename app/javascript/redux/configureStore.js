import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  greetings: []
};

function rootReducer(state, action) {
  console.log(action.type);
  switch(action.type) {
    default:
      return state
  }
}

  const store = createStore(rootReducer, initialState, applyMiddleware(thunk)
  );

  export default store;