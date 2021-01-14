//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Ms Teresia Kirung'o.
//Copyright 2021.

// var React = require("react");
// var ReactDOM = require("react-dom");
// The above can be achieved through importing the modules like this

import React from "react";
import ReactDOM from "react-dom";


// const behave like let variables, except they cannot be reassigned ie
// once const name = "Terry"; when we do name = "Marcelina"; it will generate an error.
// const name = "Terry";

const firstName = "Terry";
const lastName = "King";
const luckyNumber = 7;

// {} refrences to the value assigned to the const variable! Allowing you to write jS Statements 
//     <h1>Hello {name}!</h1>

// render can only take one html element, so in order to wrap many HTML elements to appear as one, have all of them go inside a div

ReactDOM.render(
  <div>
    <h1>Hello {firstName + " " + lastName}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    <p>Created by Ms Teresia Kirung'o</p>
    <p>Copyright @2021</p>

  </div>,
  document.getElementById("root")
);
//Performing concatenation in JavaScript inside the render option {firstName + " " + lastName}

