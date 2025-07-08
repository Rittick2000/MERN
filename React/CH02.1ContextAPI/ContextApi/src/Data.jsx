import React, { useContext } from 'react'
import counterContext from './Contexts/CounterContext'

function Data() {
    const {count,Increment,Decrement}=useContext(counterContext);
  return (
    <div>
      Count={count}
      <br />
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Data