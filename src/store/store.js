import { createStore } from 'redux';
import rootReducer from 'reducers';
import middleware from 'store/middleware';
import { sagaMiddleware } from './middleware';
import rootSaga from 'sagas';

const store = createStore(rootReducer, middleware());
sagaMiddleware.run(rootSaga);

export default store;
