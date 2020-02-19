import { createStore } from 'redux';
import rootReducer from 'reducers';
import middlewares from 'store/middlewares';

const store = createStore(rootReducer, middlewares());

export default store;
