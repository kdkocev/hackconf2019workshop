import {combineReducers} from 'tools/reducers';

import {reducer as testingReducer} from 'ducks/testing';
import {reducer as tabsReducer} from 'ducks/tabs';
import {reducer as formsReducer} from 'ducks/reduxForms';

const mainReducer = combineReducers([
  testingReducer,
  tabsReducer,
  formsReducer
]);

export {mainReducer};
