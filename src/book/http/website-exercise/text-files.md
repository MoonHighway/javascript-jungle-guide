# Reading Text Files

(1) Read file with Callback

```javascript
const fs = require("fs");

fs.readFile(
  "./public/index.html",
  "UTF-8",
  (error, html) => {
    console.log(html);
  }
);
```

(2) Read file as a Promise

```javascript
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);
```
