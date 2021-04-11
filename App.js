import React, { useState } from "react";
import Adder from "./components/main";
function App() {
  const [playAgain, setPlayAgain] = useState(2);
  const [num1, setNum1] = useState(Math.floor(Math.random() * 40));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 30));
  const reset = () => {
    setPlayAgain(playAgain + 7);
    //increase difficulity each time
    setNum1(Math.floor(Math.random() * (55 + playAgain)));
    setNum2(Math.floor(Math.random() * (53 + playAgain)));
  };
  return (
    <Adder num1={num1} num2={num2} key={playAgain} onChange={reset}></Adder>
  );
}

export default App;
