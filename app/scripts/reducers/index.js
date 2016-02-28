import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import settings from './settings';
import sounds from './sounds';
import themes from './themes';
import search from './search';

export default combineReducers({
  sounds,
  settings,
  themes,
  search,
  routing: routerReducer
});
