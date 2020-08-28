import React from "react";
import "./App.css";
import NumberSystem from "./Components/NumberSystem";

const inputValidation = {
  2: new RegExp("^[0-1]*$"),
  8: new RegExp("^[0-7]*$"),
  16: new RegExp("^[0-15]*$"),
};

function App() {
  return (
    <div className="App">
      <NumberSystem inputValidation={inputValidation} />
    </div>
  );
}

export default App;
