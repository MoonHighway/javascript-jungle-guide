# Make the DOT respond to a Mouse Click

This is a lab activity for the DOT Click. Before you start building, make sure to allow enough time for the challenge.

Run the lab slide to start:

```
npm run dot-click
```

Open at localhost:5000

## Make the Dot Respond to a Click

```javascript
let divDot = document.getElementById("dot");

divDot.onclick = function () {
  console.log("clicked!");
};
```
