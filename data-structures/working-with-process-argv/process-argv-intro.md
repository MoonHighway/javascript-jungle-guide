# process.argv Intro

- `process.argv` is an array.
- We'll verify that with `instanceof` and will notice that there are 2 items that are already part of that array:
  - where node is installed on your machine
  - where the file is located that you've run

```javascript
console.log(typeof process.argv);
console.log(process.argv instanceof Array);
console.log(Array.isArray(process.argv));
console.log(
  `process.argv has ${process.argv.length} items: `
);
console.log(process.argv);
```
