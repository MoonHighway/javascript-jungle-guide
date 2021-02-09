# Display the Total Clicks

```javascript
let divResults = document.getElementById("results");

divResults.innerText = "Click the dot, I'll count.";

divDot.onclick = function () {
  divResults.innerText = `You've clicked the dot ${++counter} times.`;
};
```
