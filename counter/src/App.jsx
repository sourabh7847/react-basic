import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState({
    name: "",
    age: 0,
  });
  // let counter = 20;
  // const incValue = () => {
  //   // console.log("value added", counter);

  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
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

  const onCounterClick = (type) => {
    if (type == "inc") {
      setCount(count + 1);
    } else {
      if (count <= 0) {
        alert("not allowed");
      } else {
        setCount(count - 1);
      }
    }
  };

  const handleInputClick = (key, val)=>{
    setdata({ ...data, [key]: val })
  }

  return (
    <>
      <h1>chai aur code</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={() => onCounterClick("inc")}>
        increase value
      </button>
      <br />
      <button onClick={() => onCounterClick("dec")}>
        decrease value
      </button>
      <br />
      <label>
        Name:{" "}
        <input
          value={data.name}
          onChange={(e) =>
            handleInputClick("",e.target.value)
          }
        />
        <br />
        Age:{" "}
        <input
          value={data.age}
          onChange={(e) => handleInputClick("age",e.target.value)}
        />
      </label>
      <br />
      <button onClick={() => console.log(data)}>
        submit
      </button>
    </>
  );
}

export default App;
