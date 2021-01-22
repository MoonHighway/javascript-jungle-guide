# Destructuring

(1) Destructuring

```javascript
const { name, topics } = agenda;
console.log(name);
console.log(topics);
```

(2) Combining Objects

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
