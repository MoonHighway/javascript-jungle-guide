# More Loops

Let's make this loop a bit more usable.

- Usually, we use `i` instead of `number` for the sake of brevity.
- We also don't want to set an arbitrary number to look through. We want to loop through the length of the array.
- Then tweak the console log to display both values in a template string.

```javascript
for (let i = 0; i < myList.length; i++) {
  console.log(`${i}: ${myList[i]}`);
}
```

It's also possible to reverse the loop:

```javascript
for (let i = myList.length - 1; i >= 0; i--) {
  console.log(`${i}: ${myList[i]}`);
}
```
