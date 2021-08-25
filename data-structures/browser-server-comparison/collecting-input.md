# Collect input in Node

To collect input in Node, include the `readline` package from Node.js.

1. Use `createInterface` to read data from a readable stream like `process.stdin`.

- `process.stdin` returns a stream of data that is passed via the command line.
- `process.stdout` will write data to the command line.
- This will be read one line at a time.

```javascript
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.setPrompt(" type text here > ");

reader.on("line", input => {
  if (input === "quit") {
    process.exit();
  }

  console.log(`    Received: ${input}`);
  reader.prompt();
});

reader.prompt();
```
