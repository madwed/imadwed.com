import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';
import Root from './containers/root';
import configureStore from './store/configure-store';

const __DEBUG__ = process.env.NODE_ENV != 'production';

const target = document.getElementById('root');
const store = configureStore({}, __DEBUG__);
const history = browserHistory;

syncReduxAndRouter(history, store);

const node = (
  <Root
    history={ history }
    store={ store }
    debug={ __DEBUG__ }
  />
);

ReactDOM.render(node, target);
