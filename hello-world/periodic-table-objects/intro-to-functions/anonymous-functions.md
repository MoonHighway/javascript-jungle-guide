# Anonymous Functions

You may see functions that aren't named. These are called **anonymous** functions.

You also may see functions that are wrapped in parentheses and have parentheses at the end. This is called an IIFE (Immediately Invoked Function Expression). The parentheses at the end are used to call the function immediately after it's read.

```javascript
(function () {
  console.log(`la la la`);
})();
```

IIFE's can take in arguments:

```javascript
(function (name) {
  console.log(`la la la ${name}`);
})(name);
```

IIFE's can be arrow functions:

```javascript
(name => {
  console.log(`la la la ${name}`);
  console.log(`${name} you're so beautiful.`);
  console.log(`la la la`);
})("Flo");
```
