import { useState } from "react";
import Home from "./Home";
import counterContext from "./Contexts/CounterContext";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <counterContext.Provider value={{count,Increment,Decrement}}>
      <Home/>
    </counterContext.Provider>
  );
}

export default App;
