import React from 'react';
import { Provider } from 'react-redux';
import '../public/static/css/reset.css';
import store from 'Store';
import MainContainer from 'Containers/MainContainer';

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
