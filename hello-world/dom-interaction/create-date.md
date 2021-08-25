# Creating Date Objects

JavaScript has a standard way to create a date using the `new Date()` constructor. Once the date is created, you can make use of a ton of different date functions to parse this date object further.

```javascript
const today = new Date();

console.log(today);
console.log(today.toLocaleTimeString());
console.log(today.toLocaleDateString());
console.log(today.getTime());
console.log(today.toISOString());
```

- [MDN Date methods and documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
