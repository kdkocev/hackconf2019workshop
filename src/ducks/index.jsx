import {combineReducers} from 'tools/reducers';

import {reducer as testingReducer} from 'ducks/testing';
import {reducer as tabsReducer} from 'ducks/tabs';

const mainReducer = combineReducers([testingReducer, tabsReducer]);

export {mainReducer};
