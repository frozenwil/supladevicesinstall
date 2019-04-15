import { combineReducers } from 'redux'
import menuReducer from './menuReducers';
import siteReducers from './siteReducers'


export default combineReducers({
  menu: menuReducer,
  sites: siteReducers
});