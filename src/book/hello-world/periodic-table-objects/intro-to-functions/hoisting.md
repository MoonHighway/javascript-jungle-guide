# Hoisting functions

(1) Hoisting 🦐

```javascript
console.log(typeof sing);
console.log(sing);

function sing() {
  console.log("La La La");
}
```

(2) Alternate Declaration 🦐

```javascript
const sing = function () {
  console.log("La La La");
};

console.log(typeof sing);
console.log(sing);
```

(3) Hoisting 🦐

```javascript
console.log(typeof sing);
console.log(sing);

const sing = function () {
  console.log("La La La");
};
```
