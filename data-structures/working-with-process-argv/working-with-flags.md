# Working with Flags

It's also possible to pass values when you run the node program with flags. If you pass the `--name` flag, this can be captured and echoed back.

1. Run this with the name flag: `node test --name "Jason"`
2. Later run with both name and age: `node test --name "Jason" --age 100`

```javascript
if (process.argv.includes("--name")) {
  let index = process.argv.indexOf("--name");
  let name = process.argv[index + 1];
  console.log(`The name "${name}" was received`);
} else {
  console.log(`The --name flag is required`);
}

function argval(flag) {
  let valueIndex = process.argv.indexOf(`--${flag}`) + 1;
  return process.argv[valueIndex];
}

console.log(argval("name"));
console.log(argval("age"));
```
