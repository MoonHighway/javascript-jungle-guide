# Displaying the Results

Instead of console.logging the results, we can display them. We'll create the element and append to the DOM.

```javascript
const p = document.createElement("p");
const output = document.getElementById("output");
p.innerText = results;
output.appendChild(p);
```
