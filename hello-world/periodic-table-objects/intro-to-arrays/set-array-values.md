# Setting Array Values

1. You can set values within an array by setting their index values.

- Describe that to access items in an array, you'll use square brackets and their index.
- The index begins at zero, so the first item in an array is at position 0.

```javascript
const instruments = [];
instruments[0] = "piano";
instruments[1] = "guitar";

console.log(instruments);
console.log(instruments.length);
console.log(instruments[1]);
```

2. Alternatively, you can set the values when you declare the array.

```javascript
const instruments = ["drums", "bass"];
console.log(instruments[1]);
```
