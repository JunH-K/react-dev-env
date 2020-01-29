import React from 'react';
import './css/reset.css';

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      {arr.map(c => {
        return c;
      })}
    </div>
  );
};

export default App;
