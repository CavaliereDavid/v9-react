const Pizza1 = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};
/** props.children accesses the children property from the props object. */
const Pizza2 = (props) => {
  return React.createElement("div", {}, props.children);
};
/** { children } destructures the children property from props directly in the function parameter list. */
const Pizza3 = ({ children }) => {
  return React.createElement("div", {}, children);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pixel's perfect pizza"),
    React.createElement(Pizza1, {
      name: "Pepperoni",
      description: "Pizza peperoni",
    }),
    React.createElement(Pizza2, {
      children: [
        React.createElement("h1", {}, "Pepperoni"),
        React.createElement("p", {}, "Pizza peperoni"),
      ],
    }),
    React.createElement(Pizza3, {
      children: [
        React.createElement("h1", {}, "Pepperoni"),
        React.createElement("p", {}, "Pizza peperoni"),
      ],
    }),
  ]);
};
ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
