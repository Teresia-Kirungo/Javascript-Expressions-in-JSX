import React from "react";
import ReactDOM from "react-dom";

const name = "Terry";
const luckyNumber = 7;
// const behave like let variables, except they cannot be reassigned ie
// once const name = "Terry"; when we do name = "Marcelina"; it will generate an error.

// {} refrences to the value assigned to the const variable!

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
    <p>Your lucky number is {Math.floor(Math.random() * 7)}</p>
  </div>,
  document.getElementById("root")
);
