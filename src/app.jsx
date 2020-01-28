import React from "react";
import ReactDOM from "react-dom";

// Polyfills
// import "core-js/stable";
import "regenerator-runtime/runtime";

import './styles.css';

import { RenderSomething } from './js/thing';

function App() {
  return (
    <div>
      <RenderSomething something="Pleas Work" />
      <h1>Hi There?</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
