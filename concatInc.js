import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState([0]);

  let emptyArr = [0];

  const incFun = () => {
    console.log(emptyArr.length);
    setCounter([...counter, counter[counter.length - 1] + 1]);
  };

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={incFun}>inc</button>
    </div>
  );
}

// 1234567788.....
