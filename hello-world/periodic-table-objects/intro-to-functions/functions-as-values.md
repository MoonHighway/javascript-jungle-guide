# Declaring Functions as Values

(1) Alternate Declaration

```javascript
const sing = function () {
  console.log("La La La");
};

console.log(typeof sing);
console.log(sing);
```

(2) Hoisting

```javascript
console.log(typeof sing);
console.log(sing);

const sing = function () {
  console.log("La La La");
};
```
