import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor: color}}>
        <div className=' fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12 bg-slate-700'>
          <button className='text-red-700 mr-2' onClick={()=>setColor("red")}>Red</button>
          {/* onClick takes an function as argument, so we can pass an callback function or reference of an function */}
          {/* means passing "funName" is ok,because it is reference of function but "funname()" is not */}
          {/* because funName() is return value from that function not a function */}
          {/* to pass argument we use callback function insise onClick */}
          <button className='text-blue-700 mr-2' onClick={()=>setColor("blue")}>Blue</button>
          <button className='text-olive-700' onClick={()=>setColor("olive")}>Default</button>
        </div>
      </div>
    </>
  )
}

export default App
