# More with Objects (5 min)

(1) Converting to JSON Strings 🦐

```javascript
const agenda = {
  name: "JavaScript Jungle",
  maxParticipants: 20,
  topics: ["browser", "node", "http"],
  instructor: {
    name: "Alex Banks",
    hometown: "Tahoe City"
  },
  print() {
    console.log(`
        ${this.name.toUpperCase()}
        ===========================
        taught by ${this.instructor.name} from ${
      this.instructor.hometown
    }
        topics: ${this.topics.join(", ")}
    `);
  }
};

const agendaJSON = JSON.stringify(agenda, null, 2);

console.log(agendaJSON);
```

(2) Converting JSON Strings back to Objects 🦐

```javascript
const backToObject = JSON.parse(agendaJSON);
```

(3) Loading JSON from a file 🦐

```javascript
const agenda = require("./agenda.json");

console.log(agenda);
```
