const header = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From React!"
);

const parent = React.createElement(
  "div",
  { id: "parent" }, [
      React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a H1 inside a parent and child"),
    React.createElement("h1", {}, "I am a H2 inside a parent and child"),
  ]),
    React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a H1 inside a parent and child2"),
    React.createElement("h1", {}, "I am a H2 inside a parent and child2"),
  ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
