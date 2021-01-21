# Universal and Isomorphic (5 min)

- Run Node code above in the browser (explain why it doesn't work)
- Run the Browser code from the "Older than JS" exercise in node (explain why it doesn't work)
- Run the following `universal` code in both: (explain why it works)

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

agenda.print();

agenda.name = "Objects are cool";
agenda.print();
```
