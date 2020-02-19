import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// https://www.npmjs.com/package/redux-devtools-extension

const middlewares = [];

const configureMiddleware = () => {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    return composeWithDevTools(applyMiddleware(...middlewares));
  }

  return applyMiddleware(...middlewares);
};

export default configureMiddleware;
