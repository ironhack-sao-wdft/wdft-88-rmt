const root = document.getElementById("root");

const title = React.createElement("h1", {}, "Hello world");

const container = React.createElement("div", {
  className: "container",
  children: [title, title, title],
});

ReactDOM.createRoot(root).render(container);

// JSX, COMPONENTE, PROPRIEDADE, ESTADO
