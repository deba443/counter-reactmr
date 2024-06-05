import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(10);
  useEffect(() => {
      if(value==0){
        return
      }
      const timer=setTimeout(() => {
        setValue((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
  }, [value]);
  return (
    <div className="App">
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <input className="input" value={value} />
      </main>
    </div>
  );
}

export default App;
