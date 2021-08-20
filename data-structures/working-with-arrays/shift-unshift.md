# Using Shift and Unshift

- `.shift()`: Removes the first element from an array and returns that new element. This mutates the array and changes the array's length.
- `.unshift`: Adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
const myList = [
  "plan trip",
  "pack food",
  "pack kitchen supplies",
  "pack tent",
  "pack sleeping bag"
];

console.log(myList.length);

const selectedItem = myList.shift();

console.log(selectedItem);
console.log(myList);

myList.shift();
myList.shift();

console.log(myList);

myList.unshift("pack roof tent");
myList.unshift("pack heater");

console.log(myList);
```
