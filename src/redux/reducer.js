/* @flow */
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

type StateType = {
  list: object
};

const initState: StateType = {
  object: { }
};

const billsReducer = (state: StateType = initState, action: object): StateType => {
  switch (action.type) {
    case 'FETCH-BILLS': {
      return state;
    }
    default: return state
  }
}

export default combineReducers({
  routing: routerReducer,
  bills: billsReducer
});

