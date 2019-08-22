import React from "react";

import "../assets/styles/index.scss";

import UserInput from "./UserInput";
import CanvasComponent from "./CanvasComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Break Your own News</h1>
      </header>
      <section>
        <p>Fam, its okay, go ahead and break your news</p>
      </section>
      <div className="MainContainer">
        <UserInput />
        <CanvasComponent />
      </div>
    </div>
  );
}

export default App;
