# Arrow Functions

(1) Arrow Function

```javascript
const add = (a = 0, b = 0) => a + b;
```

(2) Hoist Arrow function

```javascript
console.log(typeof add());
console.log(add());

const add = (a = 0, b = 0) => a + b;
```

(3) Arrow function with blocks

```javascript
const singTo = name => {
  console.log(`la la la ${name}`);
  console.log(`${name} you're so beautiful.`);
  console.log(`la la la`);
};

singTo("Florence");
```
