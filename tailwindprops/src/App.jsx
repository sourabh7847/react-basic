import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./assets/components/Card";
function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: Blob,
    age: 5
  }
  return (
    <>
      <h1 className=" bg-green-400 text-black mb-4">
        Tailwind CSS
      </h1>                   
      <Card username = "sourabh" btnText = "click me"/>
      <Card username = "bob" obj = {myObj}/>
    </>
  );
}

export default App;
