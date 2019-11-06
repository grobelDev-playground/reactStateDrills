import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import HelloWorld from "./state-drills/HelloWorld.js";
import Bomb from "./state-drills/Bomb.js";
import RouletteGun from "./state-drills/RouletteGun.js";

function App() {
  return (
    <div className="App">
      <h3>HelloWorld.js</h3>
      <HelloWorld />
      <h3>Bomb.js</h3>
      <Bomb />
      <h3>RouletteGun.js</h3>
      <RouletteGun />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
