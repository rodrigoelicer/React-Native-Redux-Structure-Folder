import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const Count = createReducer(0, {
  [types.ADD_COUNT](state, action) {
    return state + 1;
  }
});
