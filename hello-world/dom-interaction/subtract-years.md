# Subtracting Years

Let's find the difference between two years by subtracting the full year from today and JavaScript's birthday.

```javascript
const today = new Date();
const jsBirthday = new Date("9/1/1995");

console.log(today.getFullYear());
console.log(jsBirthday.getFullYear());

const jsAge =
  today.getFullYear() - jsBirthday.getFullYear();
console.log(jsAge);
```
