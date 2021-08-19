# Creating Arrays of Objects

A common data format is to create an array of objects. Create that array:

```javascript
const instruments = [
  {
    type: "guitar",
    price: 99.99
  },
  {
    type: "piano",
    price: 999.99
  },
  {
    type: "finger harp",
    price: 9.99
  }
];
```

<Info>
Student Challenge: Ask the students to return the type of the second instrument and the price of the third instrument.

```javascript
console.log(instruments[1].type);
console.log(instruments[2].price);
```

</Info>
