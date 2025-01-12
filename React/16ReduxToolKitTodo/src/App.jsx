import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment,decrement,reset, incrementByAmmount } from '../features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [ammount,stateAmmount] =useState(0);
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  function handleIncrement(){
    dispatch(increment());
  }
  function handleDecrement(){
    dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset());
  }
  function handleIncrementByAmt(){
    dispatch(incrementByAmmount(ammount));
  }
  return (
    <div className='container'>
      <button onClick={handleIncrement}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrement}>-</button>
      <br/>
      <br/>
      <button onClick={handleReset}> Reset</button>
      <br/>
      <br/>
      <input 
      type='Number'
      value={ammount}
      placeholder='Enter Amount'
      onChange={(e)=>stateAmmount(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={handleIncrementByAmt}>Inc by Ammount</button>
    </div>
  )
}

export default App
