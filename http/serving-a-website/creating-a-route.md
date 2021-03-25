# Creating a Route

(1) Handle all POST requests

```javascript
const server = http.createServer(async (req, res) => {

  if (req.method === "POST") {
    req.on("data", (chunk) => console.log(chunk.toString()));
  }

  ...
});
```
