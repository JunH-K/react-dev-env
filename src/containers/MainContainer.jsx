import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  INCREMENT_REQUEST } from '../reducers/counter';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter);

  const onClickIncrement = () => {
    dispatch({ type: INCREMENT_REQUEST, data: 1 });
  };

  const onClickDecrement = () => {
  };

  return (
    <>
      <button onClick={onClickIncrement} className='increment'>증가</button>
      <button onClick={onClickDecrement} className='decrease'>감소</button>
      <div className='count'>{count}</div>
    </>
  );
};

export default MainContainer;
