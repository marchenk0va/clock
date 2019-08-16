import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import CurrentTime from "./components/CurrentTime";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="App">
      <CurrentTime />
      <Stopwatch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
