import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

// https://www.npmjs.com/package/redux-devtools-extension

const logger = createLogger();

const configureMiddleware = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const middleware = [];

  if (isDev) {
    const devMiddleware = [...middleware, logger];
    return composeWithDevTools(applyMiddleware(...devMiddleware));
  }

  return applyMiddleware(...middleware);
};

export default configureMiddleware;
