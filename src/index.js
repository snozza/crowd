/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import client from './helpers/ApiClient';
import createStore from './redux/store';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import getRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './theme/bootstrap.overrides.css';

const dest = document.getElementById('root');
const store = createStore(client, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const component = (
  <Router
    history={history}
  >
    {getRoutes()}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger
}
