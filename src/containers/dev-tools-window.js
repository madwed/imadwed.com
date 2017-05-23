import React from 'react';
import Immutable from 'immutable';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';

export default createDevTools(
  <LogMonitor select={ (state) => Immutable.fromJS(state).toJS() }/>
);
