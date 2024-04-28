import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [Password,setPassword] = useState("");
  const PasswordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="";
    for(let i=0;i<26;i++)
    {
      str+=String.fromCharCode(65 + i);
      str+=String.fromCharCode(97 + i);
    }
    if(numberAllowed)
    {
      for(let i=0;i<10;i++)
      {
        str+=(String)(i);
      }
    }
    if(charAllowed)
    str+="!@#$%^&*";
    for(let i=0;i<length;i++)
    pass+=str[Math.floor(Math.random()*str.length+1)];
    setPassword(pass);
    console.log(str);
  },[length,numberAllowed,charAllowed,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const CopyPasswordToClipbord=useCallback(()=>{
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(Password);
  },[Password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 m-8 text-orange-500 bg-gray-700'>
        <p>Password generator</p>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            value={Password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3 rounded-lg'
            readOnly
            ref={PasswordRef}
            />
        <button
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         onClick={CopyPasswordToClipbord}
         >Copy</button>
        </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}/>
              <label>Label: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
              type="checkbox" 
              id="numberAllowed"
              defaultChecked={numberAllowed}
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
              <label>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
              type="checkbox" 
              id="characterAllowed"
              defaultChecked={charAllowed}
              onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
              <label>Chars</label>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
