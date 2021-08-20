# Destructuring

Destructuring assignment allows you to unpack values from arrays or objects.

1. Let's try this with an object:

```javascript
const { name, topics } = agenda;
console.log(name);
console.log(topics);
```

2. It's also possible to combine objects using `object literal enhancement`.

`location` is both the key and the value inside of the agenda:

```javascript
const location = {
  building: "C",
  room: "valley view"
};

const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    name: "Alex Banks",
    hometown: "Tahoe City"
  },
  location
};
```
