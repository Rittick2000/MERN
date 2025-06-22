import React, { useContext } from 'react'
import counterContext from './Contexts/CounterContext'

function Data() {
    const {count}=useContext(counterContext);
  return (
    <div>Count={count}</div>
  )
}

export default Data