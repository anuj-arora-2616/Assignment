import { combineReducers } from 'redux';
import missions from './missions';

const combinedReducers = combineReducers({
  missions,
});

const rootReducer = (appState, action) => {
  let _appState = appState;
  return combinedReducers(_appState, action);
};

export default rootReducer;
