import React from 'react';
import Immutable from 'immutable';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='H' changePositionKey='Q'>
    <LogMonitor
      select={ (state) => Immutable.fromJS(state).toJS() }
    />
  </DockMonitor>
);
