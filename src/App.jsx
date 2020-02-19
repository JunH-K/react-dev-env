import React from 'react';
import { Provider } from 'react-redux';
import '../public/css/reset.css';
import MainContainer from 'Containers/MainContainer';
import store from 'Store';


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
