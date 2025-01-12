import { useState } from "react";

function App() {
  const [counter,setCounter]= useState(55);
  const addValue = () => (setCounter(counter+1));
  const removeValue=() => (setCounter(counter-1));
  return (
    <>
      <h1>Counter Using Hook</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
      onClick={addValue}
      >
        Add Value
      </button>
      <br />
      <button
      onClick={removeValue}
      >
        Remove value
      </button>
    </>
  );
}

export default App;
