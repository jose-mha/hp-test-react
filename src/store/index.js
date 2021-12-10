import { createStore, combineReducers } from 'redux';

import { characterReducer } from './reducer';

const reducers = combineReducers({
  characterReducer,
});

const store = createStore(
  reducers, //Son todo los reducers
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
