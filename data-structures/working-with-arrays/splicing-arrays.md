# Splicing Arrays

- `.splice()`: This method changes the contents of an array by removing or replacing existing elements. If you pass in `2` and `1` to this method, you'll delete 1 item from the array starting at position 2.

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

- `.concat()`: Used to merge two or more arrays. This does not change the existing array, just returns a new array.

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
