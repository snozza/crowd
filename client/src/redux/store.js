import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createMiddleware from './middleware/clientMiddleware';
import reducer from './reducer';
import config from '../../config';

export default function create(client, history) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [createMiddleware(client), reduxRouterMiddleware, thunk];
  if (!config.isProduction) {
    middleware.push(createLogger());
  }

  return createStore(reducer, {}, applyMiddleware(...middleware));
}
