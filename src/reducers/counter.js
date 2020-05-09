import { handleActions } from 'redux-actions';
import produce from 'immer';

export const INCREMENT = 'INCREMENT';
export const INCREMENT_REQUEST = 'INCREMENT_REQUEST';
export const DECREMENT = 'DECREMENT';

const defaultState = { count: 0 };

const counter = handleActions(
  {
    [INCREMENT]: (state, action) => {
      return produce(state, draft => {
        draft.count += action.data;
      });
    },
    [DECREMENT]: (state, action) => {
      return {
        count: state.count - action.data,
      };
    },
  },
  defaultState
);

export default counter;
