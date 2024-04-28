
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]= useState(5);


  const addValue=()=>{

    // Although it's written 4 times but still it will update the counter value only one time,
    // because it sends the value in batches to UI.

    /*setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);*/

    //Solution
    // Use callback of setCounter function

    setCounter((prevCounter)=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);

    // Now it will update by 4 values
    

  }

  const removeValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Rittick's Counter</h1>
      <h3>Counter Value: {counter}</h3>
      <button
      onClick={addValue} 
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}
      > Remove Value</button>
    </>
  )
}

export default App
