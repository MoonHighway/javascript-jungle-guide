# Objects and Literal Notation

Let's create an object using object literal notation:

1. Object Literal Notation

```javascript
const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20
};

console.log(agenda);
```

2. Add to this with nested arrays and objects for topics and instructor.

```javascript
const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    name: "Alex Banks",
    hometown: "Tahoe City"
  }
};

console.log(agenda);
```
