# Serve the HTML File

In the `server.js` file, create the HTML server.

```javascript
const http = require("http");
const fs = require("fs");

const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
  const html = await readFile(
    `./public/happy.html`,
    "UTF-8"
  );
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(3000);
console.log("Mood Server Listening on Port 3000");
```
