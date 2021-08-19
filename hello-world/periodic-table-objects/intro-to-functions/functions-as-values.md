# Declaring Functions as Values

It's also possible to create a function as a value.

```javascript
const sing = function () {
  console.log("La La La");
};

console.log(typeof sing);
sing();
```

If you move the function call above where the function is declared though, notice that there is an error.

<Error>
This will break because this type of function is not hoisted. We can only call it after it's been declared.
</Error>

```javascript
console.log(typeof sing);
sing();

const sing = function () {
  console.log("La La La");
};
```
