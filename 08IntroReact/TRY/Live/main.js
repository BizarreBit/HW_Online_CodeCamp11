// const div = React.createElement(
//   'div',
//   {id: 'container', className: 'container', style: {margin: '20px'}},
//   "Hello React"
// );

// const div = React.createElement(
//   "div",
//   { id: "container", className: "container", style: { margin: "20px" } },
//   React.createElement(
//     "div",
//     {},
//     React.createElement("span", { className: "main-content" }, "Main content")
//   ),
//   React.createElement("p", {}, "Wellcome to our React website"),
//   React.createElement(
//     "ul",
//     {},
//     React.createElement("li", {className: 'list-item'}, "List 1"),
//     React.createElement("li", {}, "List 2"),
//     React.createElement("li", {}, "List 3")
//   )
// );
// console.log(div);

// const names = ["John", "Jim", "Jane"];
// const num = 20;
// const classes = "container ms-0 pt-1";

// const ul = (
//   <ul>
//     <li>{names[0]}</li>
//     <li>{names[1]}</li>
//     <li>{names[2]}</li>
//     <li>{"Jan" + "Jone"}</li>
//     <li>{1 + 2 + 3}</li>
//     <li>{num ** 2}</li>
//   </ul>
// );

// const div = (
//   <div id="container" className={classes} style={{ margin: "20px" }}>
//     Hello React {"World"}
//     {ul}
//     <label htmlFor="username">Username: </label>
//     <input id="username"/>
//   </div>
// );

// const div = (
//   <div style={{ border: "1px solid black", padding: "1rem" }}>
//     {["John", "Jane"]}
//   </div>
// );

// ReactDOM.render(div, document.getElementById("root"));

// function Header() {
//   return (
//     <div>
//       <div>Logos</div>
//       <div>Menu</div>
//     </div>
//   );
// }

// function List(props) {
//   /*props.message = `Don't do this. Props are read-Only`*/
//   return (
//     <li>
//       <span>{props.message}</span>
//       <h6>Auther: {props.auther}</h6>
//     </li>
//   );
// }

// function Content() {
//   return (
//     <div>
//       <ul>
//         {List({message: "I Love", auther: "Joe"})}
//         {List({message: "You Love", auther: "Sam"})}
//         <List message="React is easy" auther="Son"/>
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <Content />
//       <h1>This is App Component</h1>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

function Avatar(props) {
  return <img className="Avatar" src={props.avatarUrl} alt={props.name} />;
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      {/* <img className="Avatar" src={props.avatarUrl} alt={props.name} /> */}
      <Avatar avatarUrl={props.avatarUrl} name={props.name} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo avatarUrl={props.avatarUrl} name={props.name} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

ReactDOM.render(<Comment avatarUrl='https://picsum.photos/200' name='Name' text='Comment Text....' date='2006-12-24' />, document.getElementById("root"));
