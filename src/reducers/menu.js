import { Record } from 'immutable';

import { createReducer } from '../utils';
import {
  CLOSE_MENU,
  HIDE_MENU,
  SHOW_MENU,
} from '../action-types';

const Menu = Record({
  state: 'closed',
});

const events = {
  [CLOSE_MENU]: (state) => {
    return state.set('state', 'closed');
  },

  [HIDE_MENU]: (state) => {
    return state.set('state', 'hidden');
  },

  [SHOW_MENU]: (state) => {
    return state.set('state', 'open');
  },
};

export default createReducer(Menu(), events);
