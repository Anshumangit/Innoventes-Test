import React, { useContext } from 'react';
import { AppContext } from './App';

const ComA = () => {
  const { name, ChangeName, count, IncreaseCount } = useContext(AppContext);
  console.log(name);
  return (
    <>
      <h2>{name}</h2>
      <h2>{count}</h2>
      <button
        onClick={() => {
          IncreaseCount();
        }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          ChangeName();
        }}
      >
        Change Name
      </button>
    </>
  );
};

export default ComA;
