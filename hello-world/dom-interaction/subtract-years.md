# Subtracting Years

(1) Subtracting Years

```javascript
const today = new Date();
const jsBirthday = new Date("9/1/1995");

console.log(today.getFullYear());
console.log(jsBirthday.getFullYear());

const jsAge =
  today.getFullYear() - jsBirthday.getFullYear();
console.log(jsAge);
```

(2) Handling Cleanup

```javascript
const today = new Date();
const jsBirthday = new Date("9/1/1995");
const jsAge =
  today.getFullYear() - jsBirthday.getFullYear();
```
