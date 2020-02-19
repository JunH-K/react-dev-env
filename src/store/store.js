import { createStore } from 'redux';
import rootReducer from 'reducers';
import middleware from 'store/middleware';

const store = createStore(rootReducer, middleware());

export default store;
