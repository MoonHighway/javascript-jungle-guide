# The Array Type

Start with a refresher of the array type and two ways to create an array.

1. Define Arrays

```javascript
const yourList = new Array();
const myList = [];

console.log(yourList);
console.log(myList);
```

2. Go over how to check to see if something is an array. If you check the typeof an Array or Date, it will be called an object.

If you check for something being an `instanceof` something, the result will be more specific.

```javascript
const myList = [];
const today = new Date();

console.log(typeof myList);
console.log(typeof today);
console.log(myList instanceof Array);
console.log(today instanceof Date);
console.log(Array.isArray(myList));
console.log(Array.isArray(today));
```
