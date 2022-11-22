import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("useEffect 1");

    if (counter > 9) {
      setColor("yellow");
    } else if (counter > 19) {
      setColor("green");
    }
  }, [color]);

  function handleUp() {
    setCounter((prevState) => prevState + 1);
  }

  function handleDown() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div className="App">
      <strong style={{ backgroundColor: color }}>{counter}</strong>

      <button onClick={handleUp}>+</button>
      <button onClick={handleDown}>-</button>
    </div>
  );
}

export default App;
