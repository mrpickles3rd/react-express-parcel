import React from "react";
import ReactDOM from "react-dom";

import { RenderSomething } from './js/thing';

import './styles.css';

function App() {
  return (
    <div>
      <RenderSomething something="Pleas Work" />
      <h1>Hi There?</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
