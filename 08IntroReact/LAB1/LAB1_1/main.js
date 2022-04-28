const root = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {
      style: { "font-size": "2rem" },
    },
    "Hello My Friend"
  ),
  React.createElement('div', {}, 'Friend List'),
  React.createElement('ul', {},
    React.createElement('li', {}, 'John'),
    React.createElement('li', {}, 'Jack'),
    React.createElement('li', {}, 'Jane'),
  )
);

ReactDOM.render(root, document.getElementById("root"));
