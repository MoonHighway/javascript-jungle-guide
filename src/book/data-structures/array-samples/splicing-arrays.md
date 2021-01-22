# Splicing Arrays

## The CRISPR of JavaScript

(1) Splicing Items

```javascript
const myList = [
  "plan trip",
  "pack food",
  "pack kitchen supplies",
  "pack tent",
  "pack sleeping bag"
];

const thirdItem = myList.splice(2, 1);

console.log(thirdItem);
console.log(myList);

myList.splice(1, 0, "pack mobile kitchen");
console.log(myList);
```

(2) Array Concatenation

```javascript
const myList = [
  "plan trip",
  "pack food",
  "pack kitchen supplies",
  "pack tent",
  "pack sleeping bag"
];

const middleItems = myList.splice(2, 3);

console.log(middleItems);
console.log(myList);

const bigList = myList
  .concat(middleItems)
  .concat(middleItems);

console.log(bigList);
```
