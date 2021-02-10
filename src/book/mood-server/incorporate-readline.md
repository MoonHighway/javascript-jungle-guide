# Incorporating Readline

## Include readline

```javascript
const readline = require("readline");
```

## Create Readline interface

```javascript
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```
