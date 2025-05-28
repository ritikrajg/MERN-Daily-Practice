import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }
  function reset(){
    setCount(0)
  }
  return (
      <div className="App">
        <div className="head">Increment & Decrement</div>
        <div className="counter">
          <button className="btn1" onClick={decrement} >-</button>
          <div>|</div>
          <div>{count}</div>
          <div>|</div>
          <button className="btn1" onClick={increment} >+</button>
        </div>
        <div >
          <button className="btn2" onClick={reset}>Reset</button>
        </div>
      </div>
  );
}

export default App;
