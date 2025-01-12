import { useMemo, useState } from 'react'
import './App.css'

function App() { // App() is an component, which will replaced when we made any update on any component on App.
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const increaseCount1=()=>{
    setCount1(count1+1);
  }

  // useMemo will cache the value and only update when 
  // we made any update on dependency list elements
  const isOdd=useMemo(()=>{
    let i=0;
    while(i<2000000000) i++;
    return count1%2;
  },[count1]);

  // const isOdd=()=>{
  //   let i=0;
  //   while(i<2000000000) i++;
  //   return count1%2;
  // }
  
  return (
    <>
      <p>Value={count1}</p>
      <button
      onClick={increaseCount1}
      >
        increase count1
      </button>
      <p>coun1 is {isOdd? "odd": "even"}</p>
      <p>Value={count2}</p>
      <button
      onClick={()=>setCount2(count2+1)}
      >
        increase count2
      </button>
     
    </>
  )
}

export default App
