# Not a Number (NaN)

A special type in JavaScript is `NaN` which means not a number.

```javascript
let isAnything = NaN;
```

It's less likely that you'd set a value to `NaN` and more likely that you'd receive `NaN` as a result. For example, if you tried to multiply a string by 7, you'd see that this is not a number.

```javascript
let isAnything = 7 * "hello";
console.log(isAnything);
```
