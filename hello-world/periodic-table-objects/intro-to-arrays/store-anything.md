# Arrays Can Store Anything

You can store values of mixed types in an array - strings, numbers, whatever. You can also store arrays inside of arrays.

```javascript
const instruments = [
  1,
  "hello",
  null,
  undefined,
  [4, "five"]
];
```

<Info>
Student Challenge: Log "five" to the console. Ask students to share their answer in the chat when they're finished.

```javascript
console.log(instruments[4][1]);
```

</Info>
