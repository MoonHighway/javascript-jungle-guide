# Pluralize the word time(s)

```javascript
divDot.onclick = function () {
  divResults.innerText = `You've clicked the dot ${++counter}`;
  divResults.innerText += counter > 1 ? " times" : " time";
};
```
