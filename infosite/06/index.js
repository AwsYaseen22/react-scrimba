import React from "react";
import ReactDom from "react-dom";

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

let content = (
  <div>
    <h1>This is the title</h1>
    <p>This is a paragraph</p>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  </div>
);
console.log(content);

ReactDom.render(content, document.getElementById("root"));

// Each update we should use npm run build to update the index.pack.js
