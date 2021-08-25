# Hoisting Functions

Let's try to move the function call of sing to the top of the file, before it has been declared.

Notice that this works! The function is called before the function is declared. JavaScript functions are **hoisted** to the top of the scope. Think of this as the functions are just being moved to the top of the file and then can be invoked from anywhere.

```javascript
console.log(typeof sing);
sing();

function sing() {
  console.log("La La La");
}
```
