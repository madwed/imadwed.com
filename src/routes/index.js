import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from '../components/layout';

import Home from '../components/pages/home';
import Main from '../components/pages/main';

export default (store) => (
  <Route path='/'>
    <Route component={ Layout }>
      <IndexRoute component={ Main } />
      <Route path='/home' components={ Home } />
    </Route>
  </Route>
)
