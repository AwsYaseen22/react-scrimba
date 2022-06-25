/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react";
import ReactDOM from "react-dom";

// Custom component
function MyPage() {
  return (
    <div>
      <h1>Why I learn react</h1>
      <ul>
        <li>to practice a frontend library</li>
        <li>to be ready for my next job</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyPage />, document.getElementById("root"));
