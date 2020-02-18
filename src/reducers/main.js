const initialState = { main: 0 };

export const MAIN = 'ACTION_MAIN';
export const mainAction = data => ({ type: MAIN, data });

const main = (state = initialState, action) => {
  switch (action.type) {
    case MAIN: {
      return {
        ...state,
        main: action.data.main,
      };
    }
    default: {
      return state;
    }
  }
};

export default main;
