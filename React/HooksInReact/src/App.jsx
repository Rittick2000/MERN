
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]= useState(5);


  const addValue=()=>{
    if(counter<20)
    counter++;
    else
    {
      const warning=document.createElement('p');
      warning.innerHTML="Value cannot be more than 20";
      document.getElementById('root').appendChild(warning);
      setTimeout(()=>{
        document.getElementById('root').removeChild(warning);
      },2000);
    }
    setCounter(counter);
  }

  const removeValue=()=>{
    if(counter>0)
      counter--;
    else
    {
      const warning=document.createElement('p');
      warning.innerHTML="Value cannot be less than 0";
      document.getElementById('root').appendChild(warning);
      setTimeout(()=>{
        document.getElementById('root').removeChild(warning);
      },2000);
    }
    setCounter(counter);
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
