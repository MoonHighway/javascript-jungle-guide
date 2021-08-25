# Setting Dates

`new Date()` will always return the current date, but you can pass a date into the Date constructor to find details about it.

```javascript
const today = new Date();
const jsBirthday = new Date("9/1/1995");

console.log(jsBirthday.toLocaleTimeString());
console.log(jsBirthday.toLocaleDateString());
console.log(jsBirthday.getTime());
console.log(jsBirthday.toISOString());
```
