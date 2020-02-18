import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mainAction } from '../reducers/main';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { main } = useSelector(state => state.main);

  const onClick = () => {
    dispatch(mainAction({ main: main + 1 }));
  };

  return (
    <>
      <button onClick={onClick}>버튼</button>
      <div>{main}</div>
    </>
  );
};

export default MainContainer;
