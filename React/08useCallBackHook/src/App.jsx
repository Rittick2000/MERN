import { useCallback, useState } from 'react'
import Child from './Child';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // useCallBack is same like useMemo But,
  // useCallBack cache an callBack(function) and useMemo cache an value
  const fun=useCallback(()=>{
    console.log("Hii");
  },count)
  // without useCallback child will re-render 

  return (
    <>
      <Child prop1={fun}/>
      <button onClick={()=>setCount(count+1)}>count={count}</button>
    </>
  )
}

export default App
