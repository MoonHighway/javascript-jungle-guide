# Spread Operator

Another JavaScript syntax to understand well is the spread operator.

When we use Object Literal Enhancement to add the fields from location to the agenda, we're nesting the object. If we use three dots in front of location (`...location`), we can push all of the nested fields into the object.

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

2. Point out that order matters. If location details are added to the beginning of these object, they may be overwritten.

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
