import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="heading" tabIndex={1}>
    Hello there!
  </h1>
);

const Heading = () => {
  return (
    <div id="container">
      <Title />
      <h1>I am a heading</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
