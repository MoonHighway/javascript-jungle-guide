# Random Number

`Math.random()` will return a random value between 0 and 1.

- It includes 0 but not 1.
- When you multiply by 10, it will return a result greater than 1.
- When you floor the results, you'll get a number instead of a float.

```javascript
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
```
