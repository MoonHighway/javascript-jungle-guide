# More with Objects

So far, we've looked at the pattern of creating objects with object literal notation. There's another common object format called JSON: JavaScript Object Notation.

The big difference here is quotation marks around the keys.

1. To convert an object to a JSON object use `JSON.stringify(obj)`:

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

1. To convert JSON strings back to an object use `JSON.parse(obj)`:

```javascript
const backToObject = JSON.parse(agendaJSON);
```

3. It's also common to load JSON from an external file. To do this, you can `require` it.

<Info>
More on file importing and exporting later in the course.
</Info>

```javascript
const agenda = require("./agenda.json");

console.log(agenda);
```
