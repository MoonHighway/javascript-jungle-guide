# Universal and Isomorphic

- Run the collecting input sample in the browser.
- Link from an HTML page to the JavaScript file.

<Error>
Explain that this doesn't work because the process object doesn't exist in the browser.
</Error>

- Run the Browser code from the "Older than JS" exercise in node (explain why it doesn't work)

<Error>
This code does not work because DOM elements are referenced. In Node.js, there is no DOM, so interacting with it doesn't work.
</Error>

It is possible to create code that works universally - in Node.js and in the browser. Let's use this agenda to demonstrate that:

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
