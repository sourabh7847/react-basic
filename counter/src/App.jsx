import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // let counter = 20;
  // const incValue = () => {
  //   // console.log("value added", counter);

  //   setCount(count + 1);
  // };
  // const decValue = () => {
  //   // console.log("value added", counter);
  //   if (count <= 0) {
  //     alert("Count value should not go in negative value");
  //     return 0;
  //   }
  //   setCount(count - 1);
  // };

  const onCounterClick = (type) =>  {
    if(type == 'inc') {
      setCount(count + 1);
    } else {
      if(count <= 0) {
        alert("not allowed")
      } else {
        setCount(count - 1);
      }
    }
  }


  return (
    <>
      <h1>chai aur code</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={() => onCounterClick("inc")}>increase value</button>
      <br />
      <button onClick={() =>onCounterClick("dec")}>decrease value</button>
    </>
  );
}

export default App;
