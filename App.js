/**
 * create nested elements using react.
 *
 * <div id="parent">
 * <div id="child">
 * <h1></h1>
 * </div>
 * </div>
 *
 * ReactElement is an (Object) becomes HTML that Browser understands.
 *
 *
 *
 * JSX that helps to improve the below clutter.
 *
 * React elements:
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

//JSX heading example

const Title = () => (
  <h1 id="heading" className="head" tabIndex="1">Namaste React using JSX 🚀</h1>
);

//React components

/**
 * Class Based Component - OLD
 * Functional Component - New
 */
const number = 1000;

//React functional component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    { number }
    <h1 className="heading">Namaste react 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
