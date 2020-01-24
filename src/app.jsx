import React from "react";
import ReactDOM from "react-dom";

import { saySomething } from './js/thing';

import './styles.css';

function App() {
  saySomething('Please work');

  return (
    <div>
      <h1>Hi There?</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
