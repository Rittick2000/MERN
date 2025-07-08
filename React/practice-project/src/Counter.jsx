import React from 'react'
import { useRef } from 'react';

function Counter() {
    const count=useRef(0);
    const handleOnChange=()=>{
        count.current=count.current+1;
        console.log(count.current);
    }
  return (
    <div className='container'>
    <button className='button' onClick={handleOnChange}>counter={count.current}</button>
    </div>
  )
}

export default Counter;