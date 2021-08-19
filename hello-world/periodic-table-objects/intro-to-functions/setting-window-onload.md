# Setting Window Onload

If you want to call a function when the browser loads the page, you can set a function equal to `window.onload`.

```javascript
console.log("loading DOM");
window.onload = function () {
  console.log("DOM loaded");
};
```
