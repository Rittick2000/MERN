import { useEffect, useState, useRef } from 'react'
import './App.css'

// useRef Hooks hold the state/value of the variable and it's
// does not reset upon element's re-render.
function App() {
  const [count, setCount] = useState(0)
  let val=1;

  let val2=useRef(0); // useRef returns an Object, and we access that using .current

  const countHandler=()=> {
    val=val+1;
    console.log("val=",val);
    //with this approach when we update count,
    //entier component will re-render and value will again re-set so,
    //on every click value will only set to 2
    setCount(count+1);
    val2.current=val2.current+1;
    console.log("val2=",val2.current);
    // val2 is an useRef Object and it does not set on re-render
    // so on every button click val2 will update
  }

  // Without any dependency list useEffect will only call on initial render or re-render
  useEffect(()=>console.log("re-rendering element"));
  return (
    <>
     <button onClick={countHandler}>value is: {count}</button>
    </>
  )
}

export default App
