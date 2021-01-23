# Spread Operator

(1) Using the Spread Operator

```javascript
const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    ...location
    name: "Alex Banks",
    hometown: "Tahoe City",
  },
  ...location
};
```

(2) Replacing Values with Spread

```javascript
const location = {
  name: "Tahoe Campus",
  building: "C",
  room: "valley view"
};

const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    ...location,
    name: "Alex Banks",
    hometown: "Tahoe City"
  },
  ...location
};
```

(3) Order Matters

```javascript
const agenda = {
  ...location,
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    name: "Alex Banks",
    hometown: "Tahoe City",
    ...location
  }
};
```
