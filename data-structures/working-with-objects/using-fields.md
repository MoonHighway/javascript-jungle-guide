# Using Fields

This is bonus content if you're moving through the class quickly!

(1) Using Fields

```javascript
for (let key in agenda) {
  if (typeof agenda[key] === "function") {
    agenda[key]();
  }
}
```

(2) Using `Object.keys` for looping

```javascript
const keys = Object.keys(agenda);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
  console.log(agenda[keys[i]]);
}
```

(3) Using `keys` for objects

```javascript
const resorts = [
  "Jackson Hole",
  "Alpine Meadows",
  "Kirkwood"
];

const data = {};

for (let i = 0; i < resorts.length; i++) {
  let key = resorts[i].toUpperCase().replace(" ", "_");
  data[key] = resorts[i];
}

console.log(data);
```
