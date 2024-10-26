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
 * JSX that helps to improve the below clutter.
 */

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm ab h1 tag"), React.createElement("h1", {}, "I'm ab h1 tag"), React.createElement("h1", {}, "I'm ab h1 tag")]
    ));

// const hearder = React.createElement("h1", {}, 'Hello world from react');
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(hearder);
root.render(parent);