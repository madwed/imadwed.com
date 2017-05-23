import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';

import menu from './menu';

export default combineReducers({
  menu,
  routing,
});
