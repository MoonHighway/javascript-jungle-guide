# Creating a Web Server

(1) Server Hello World

```javascript
const fs = require("fs");
const util = require("util");
const http = require("http");

const readFile = util.promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
  res.end(`${req.method} requested for ${req.url}`);
});

server.listen(3000, () =>
  console.log("http://localhost:3000")
);
```
