# Object Dot Notation

Unlike arrays where we set and accessed values by position, we use dot notation with objects.

First, we can set an instrument's type and price:

```javascript
const instrument = {};
instrument.type = "guitar";
instrument.price = 199.99;
```

Then we'll use dot notation to access these values:

```javascript
console.log(
  `The ${instrument.type} is $${instrument.price}.`
);
```

<Info>
Notice how we use the template string to parse this object. We also use double dollar signs for the instrument price: one for the displayed price and one for the template.
</Info>
