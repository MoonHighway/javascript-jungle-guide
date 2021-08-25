# Arrow Functions

A common syntax that has emerged for creating functions is to create an arrow function.

1. Create the function as a variable or a constant.
2. Pass arguments in parentheses like before.
3. Use the arrow (`=>`) to point to what the function should return.
4. If the function is a single line function (aka it returns one thing), you don't need to use curly braces around the return.

```javascript
const add = (a = 0, b = 0) => a + b;
```

2. The same hoisting rules will apply.

<Error>
Calling the arrow function before it is declared will cause an undefined error.
</Error>

```javascript
console.log(typeof add());
console.log(add());

const add = (a = 0, b = 0) => a + b;
```

If you are returning multiple lines, wrap them in curly braces.

```javascript
const singTo = name => {
  console.log(`la la la ${name}`);
  console.log(`${name} you're so beautiful.`);
  console.log(`la la la`);
};

singTo("Florence");
```
