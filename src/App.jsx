import React from 'react';
import './css/reset.css';
import './css/style.css';

const App = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      {arr.map(i => {
        return i;
      })}
    </div>
  );
};

export default App;
