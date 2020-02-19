import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../reducers/counter';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter);

  const onClickIncrement = () => {
    dispatch({ type: INCREMENT, data: 1 });
  };

  const onClickDecrement = () => {
    dispatch({ type: DECREMENT, data: 1 });
  };

  return (
    <>
      <button onClick={onClickIncrement}>증가</button>
      <button onClick={onClickDecrement}>감소</button>
      <div>{count}</div>
    </>
  );
};

export default MainContainer;
