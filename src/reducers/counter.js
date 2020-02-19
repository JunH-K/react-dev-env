import { handleActions } from 'redux-actions';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const defaultState = { count: 0 };

const counter = handleActions(
  {
    [INCREMENT]: ({ count }, action) => {
      return {
        count: count + action.data,
      };
    },
    [DECREMENT]: ({ count }, action) => {
      return {
        count: count - action.data,
      };
    },
  },
  defaultState
);

export default counter;
