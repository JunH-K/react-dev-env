import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';
import './css/reset.css';
import MainContainer from 'Containers/MainContainer';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </div>
  );
};

export default App;
