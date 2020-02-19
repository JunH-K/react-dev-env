import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// https://www.npmjs.com/package/redux-devtools-extension

const logger = store => next => action => {
  console.log('현재상태->', store.getState());
  console.log('action->', action);
  const result = next(action);
  console.log('다음상태->', store.getState());
  console.log('\n');
  return result;
};

const middlewares = [logger];

const configureMiddleware = () => {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    return composeWithDevTools(applyMiddleware(...middlewares));
  }

  return applyMiddleware(...middlewares);
};

export default configureMiddleware;
