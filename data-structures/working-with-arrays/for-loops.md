# For Loops

Loops in JavaScript help us iterate over values. Let's look at `for` loops first.

1. Create a loop that counts to 5.

```javascript
for (let number = 1; number <= 5; number++) {
  console.log(number);
}
```

- A for loop takes in an initial count variable, a condition, and an incrementer.

2. Change the loop to work with array

```javascript
for (let number = 0; number < myList.length; number++) {
  console.log(number);
  console.log(myList[number]);
}
```
