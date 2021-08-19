# Pushing new objects into an array

Earlier, we used `.push()` to add single values to an array. You can also push in entire objects.

```javascript
const instruments = [];

instruments.push({
  type: "drums",
  price: 499.99
});

instruments.push({
  type: "keyboard",
  price: 299.99
});

console.log(instruments);
```

<Warning>
Always remember that the push method does mutate or change the original array. 
</Warning>
