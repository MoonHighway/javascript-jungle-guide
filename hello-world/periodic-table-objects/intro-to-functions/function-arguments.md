# Function Arguments

(1) add function with arguments

```javascript
function add(a, b) {
  return a + b;
}

console.log(typeof add);
console.log(add);

console.log(typeof add(1, 2));
console.log(add(1, 2));
```

(2) Add returns NaN

```javascript
console.log(typeof add());
console.log(add());
```
