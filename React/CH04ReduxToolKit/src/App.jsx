import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  function incrementCount(){
    dispatch(increment());
  }
  function decrementCount(){
    dispatch(decrement());
  }

  function resetCount(){
    dispatch(reset());
  }
  return (
    <>
      <button onClick={incrementCount}>+</button>
      <p>Count:{count}</p>
      <button onClick={decrementCount}>-</button>
      <br />
      <button onClick={resetCount}>Reset Count</button>
      <br />
      
    </>
  )
}

export default App
