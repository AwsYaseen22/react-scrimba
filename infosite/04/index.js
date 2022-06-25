// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// // JSX
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );

// console.log(page);

// ReactDOM.render(page, document.getElementById("root"));

let nav = (
  <nav>
    <h1>myBrand</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(nav, document.getElementById("root"));
