# Creating Arrays of Objects

(1) Create an array of instruments

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

(2) Get individual objects from within the array

```javascript
console.log(instruments[1].type);
console.log(instruments[2].price);
```
