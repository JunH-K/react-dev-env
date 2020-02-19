import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
// https://www.npmjs.com/package/redux-devtools-extension

const logger = createLogger();
const middlewares = [];

const configureMiddleware = () => {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    const devMiddlewares = [...middlewares, logger];
    return composeWithDevTools(applyMiddleware(devMiddlewares));
  }

  return applyMiddleware(...middlewares);
};

export default configureMiddleware;
