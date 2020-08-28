import React from "react";
import "./App.css";
import NumberSystem from "./Components/NumberSystem";

const inputValidation = {
  2: new RegExp("^[0-1]*$"),
  8: new RegExp("^[0-7]*$"),
  16: new RegExp("^[0-9]*$"),
};

function App() {
  return (
    <div className="App">
      <h1> Number System </h1>
      <NumberSystem inputValidation={inputValidation} bases={[2, 8, 16]} />
    </div>
  );
}

export default App;
