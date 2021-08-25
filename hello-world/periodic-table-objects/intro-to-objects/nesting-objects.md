# Nesting Objects Inside of Other Objects

You can also nest objects inside of other objects. To access the values from the nested objects, chain on more properties.

```javascript
const instrument = {
  type: "guitar",
  price: 99.99,
  owner: {
    name: "Jim",
    level: "expert"
  }
};

console.log(
  `The ${instrument.type} is owned by ${instrument.owner.name}.`
);

if (instrument.owner.level == "expert") {
  console.log("Shred on");
} else {
  console.log("Take some lessons");
}
```
