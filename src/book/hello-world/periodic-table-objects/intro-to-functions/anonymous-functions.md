# Anonymous Functions

```javascript
(function () {
  console.log(`la la la`);
})();
```

```javascript
(function (name) {
  console.log(`la la la ${name}`);
})(name);
```

```javascript
(name => {
  console.log(`la la la ${name}`);
  console.log(`${name} you're so beautiful.`);
  console.log(`la la la`);
})("Flo");
```
